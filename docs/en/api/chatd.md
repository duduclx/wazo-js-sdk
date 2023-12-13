# Chatd

**`Chat`** **`Status`**

Use chatd to send and retrieve chat messages and user statuses.
```js
Wazo.chatd.getContactStatusInfo(contactUuid: UUID);
Wazo.chatd.getState(contactUuid: UUID);
Wazo.chatd.getLineState(contactUuid: UUID);
Wazo.chatd.getMultipleLineState(contactUuids: ?Array<UUID>);
Wazo.chatd.getUserRooms();
Wazo.chatd.updateState(contactUuid: UUID, state: string);
Wazo.chatd.updateStatus(contactUuid: UUID, state: string, status: string);
Wazo.chatd.createRoom(name: string, users: Array<ChatUser>);
Wazo.chatd.getRoomMessages(roomUuid: string);
Wazo.chatd.sendRoomMessage(roomUuid: string, message: ChatMessage);
Wazo.chatd.getMessages(options: GetMessagesOptions);
```