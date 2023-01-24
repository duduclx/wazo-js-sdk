import ApiRequester from '../utils/api-requester';
import type { UUID } from '../domain/types';
import Profile from '../domain/Profile';
import ChatRoom from '../domain/ChatRoom';
import type { ChatUser, ChatMessageListResponse } from '../domain/ChatMessage';
import ChatMessage from '../domain/ChatMessage';

export type PresenceResponse = {
  lines: Array<{
    id: number;
    state: string;
  }>;
  sessions: Array<{
    mobile: boolean;
    uuid: string;
  }>;
  state: string;
  status: string;
  user_uuid: string;
};
type PresenceListResponse = {
  filtered: number;
  total: number;
  items: Array<PresenceResponse>;
};
type GetMessagesOptions = {
  direction: string | null | undefined;
  limit: number | null | undefined;
  order: string | null | undefined;
  offset: string | null | undefined;
  search: string | null | undefined;
  distinct: string | null | undefined;
};

export interface ChatD {
  updateState: (contactUuid: UUID, state: string) => Promise<boolean>;
  updateStatus: (contactUuid: UUID, state: string, status: string) => Promise<boolean>;
  getState: (contactUuid: UUID) => Promise<string>;
  getContactStatusInfo: (contactUuid: UUID) => Promise<PresenceResponse>;
  getLineState: (contactUuid: UUID) => Promise<string>;
  getMultipleLineState: (contactUuids: Array<UUID> | null | undefined) => Promise<string>;
  getUserRooms: () => Promise<Array<ChatRoom>>;
  createRoom: (name: string, users: Array<ChatUser>) => Promise<ChatRoom>;
  getRoomMessages: (roomUuid: string, params?: GetMessagesOptions) => Promise<Array<ChatMessage>>;
  sendRoomMessage: (roomUuid: string, message: ChatMessage) => Promise<ChatMessage>;
  getMessages: (options: GetMessagesOptions) => Promise<ChatMessage>;
}

export default ((client: ApiRequester, baseUrl: string): ChatD => ({
  updateState: (contactUuid: UUID, state: string): Promise<boolean> => client.put(`${baseUrl}/users/${contactUuid}/presences`, {
    state,
  }, null, ApiRequester.successResponseParser),
  updateStatus: (contactUuid: UUID, state: string, status: string): Promise<boolean> => {
    const body = {
      state,
      status,
    };
    return client.put(`${baseUrl}/users/${contactUuid}/presences`, body, null, ApiRequester.successResponseParser);
  },
  getState: async (contactUuid: UUID): Promise<string> => client.get(`${baseUrl}/users/${contactUuid}/presences`).then((response: PresenceResponse) => response.state),
  getContactStatusInfo: async (contactUuid: UUID): Promise<PresenceResponse> => client.get(`${baseUrl}/users/${contactUuid}/presences`).then((response: PresenceResponse) => response),
  getLineState: async (contactUuid: UUID): Promise<string> => client.get(`${baseUrl}/users/${contactUuid}/presences`).then((response: PresenceResponse) => Profile.getLinesState(response.lines)),
  getMultipleLineState: async (contactUuids: Array<UUID> | null | undefined): Promise<string> => {
    const body: any = {};

    if (contactUuids && contactUuids.length) {
      body.user_uuid = contactUuids.join(',');
    }

    return client.get(`${baseUrl}/users/presences`, body).then((response: PresenceListResponse) => response.items);
  },
  getUserRooms: async (): Promise<Array<ChatRoom>> => client.get(`${baseUrl}/users/me/rooms`).then(ChatRoom.parseMany),
  createRoom: async (name: string, users: Array<ChatUser>): Promise<ChatRoom> => client.post(`${baseUrl}/users/me/rooms`, {
    name,
    users,
  }).then(ChatRoom.parse),
  getRoomMessages: async (roomUuid: string, params?: GetMessagesOptions): Promise<Array<ChatMessage>> => {
    const qs = ApiRequester.getQueryString(params || {});
    return client.get(`${baseUrl}/users/me/rooms/${roomUuid}/messages${qs.length ? `?${qs}` : ''}`).then((response: ChatMessageListResponse) => ChatMessage.parseMany(response));
  },
  sendRoomMessage: async (roomUuid: string, message: ChatMessage): Promise<ChatMessage> => client.post(`${baseUrl}/users/me/rooms/${roomUuid}/messages`, message).then(ChatMessage.parse),
  getMessages: async (options: GetMessagesOptions): Promise<ChatMessage> => client.get(`${baseUrl}/users/me/rooms/messages`, options),
}));