# Phone

Liste des fonctions disponible dans `Wazo.Phone`.

```json
accept: (callSession: CallSession, cameraEnabled?: boolean): Promise<string | null>
atxfer: (callSession: CallSession) => Record<string, any> | null;
call: (extension: string, withCamera: boolean, rawSipLine: SipLine | null | undefined, audioOnly: boolean, conference: boolean) => Promise<CallSession | null | undefined>;
checkSfu: () => void;
connect: (options: Partial<ConnectionOptions>, sipLine?: SipLine | null | undefined) => Promise<void>;
connectWithCredentials: (server: string, sipLine: SipLine, displayName: string, rawOptions: Partial<ConnectionOptions>) => void;
disconnect: () => Promise<void>;
getLocalMediaStream: (callSession: CallSession) => MediaStream | null | undefined;
getLocalStream: (callSession: CallSession) => MediaStream | null | undefined;
getLocalVideoStream: (callSession: CallSession) => MediaStream | null;
getOutputDevice: () => string | null;
getPrimaryLine: () => SipLine | null;
getPrimaryWebRtcLine: () => SipLine | null;
getRemoteStream: (callSession: CallSession) => MediaStream | null;
getRemoteStreamForCall: (callSession: CallSession) => MediaStream | null;
getRemoteStreamsForCall: (callSession: CallSession) => MediaStream | null;
getRemoteVideoStream: (callSession: CallSession) => MediaStream | null;
getRemoteVideoStreamForCall: (callSession: CallSession) => MediaStream | null;
getRemoteVideoStreamFromPc: (callSession: CallSession) => MediaStream | null;
getSipLines: () => SipLine[];
getSipSessionId: (sipSession: Invitation | Inviter) => string | null | undefined;
getStats: (callSession: CallSession) => Promise<RTCStatsReport | null | undefined>;
hangup: (callSession: CallSession) => Promise<boolean>;
hasALocalVideoTrack: (callSession: CallSession) => boolean;
hasAVideoTrack: (callSession: CallSession) => boolean;
hasLocalVideo: (callSession: CallSession) => boolean;
hasSfu: () => boolean;
hasVideo: (callSession: CallSession) => boolean;
hold(callSession: CallSession): Promise<void | OutgoingInviteRequest> | null | undefined;
isVideoRemotelyHeld: (callSession: CallSession) => boolean;
mute: (callSession: CallSession, withApi?: boolean) => void;
muteViaAPI: (callSession: CallSession) => void;
reinvite: (callSession: CallSession, constraints: (Record<string, any> | null), conference: boolean) => Promise<OutgoingInviteRequest | void | null>;
reject: (callSession: CallSession) => Promise<void> | undefined;
resume: (callSession: CallSession) => Promise<MediaStream | null | void>;
sendChat: (content: string, sipSession?: Inviter | Invitation) => void;
sendDTMF: (tone: string, callSession: CallSession) => void;
sendMessage: (body: string, sipSession?: Inviter | Invitation, contentType?: string) => void;
sendSignal: (content: any, sipSession?: Inviter | Invitation) => void;
startConference: (host: CallSession, otherCalls: CallSession[]) => Promise<AdHocAPIConference>;
startNetworkMonitoring: (callSession: CallSession, interval: number) => void;
startScreenSharing: (constraints: Record<string, any>, callSession?: CallSession) => Promise<MediaStream | null>;
stopNetworkMonitoring: (callSession: CallSession) => void;
stopScreenSharing: (callSession?: CallSession, restoreLocalStream?: boolean) => Promise<OutgoingInviteRequest | void | null>;
transfer: (callSession: CallSession, target: string) => void;
turnCameraOff: (callSession: CallSession) => void;
turnCameraOn: (callSession: CallSession) => void;
unhold: (callSession: CallSession) => Promise<MediaStream | void | null | undefined>;
unmute: (callSession: CallSession, withApi?: boolean) => void;
unmuteViaAPI: (callSession: CallSession) => void;
getCurrentSipSession: () => Invitation | Inviter | null;
getLineById: (lineId: string) => SipLine | null;
getSipLines: () => SipLine[];
getOutputDevice: () => string | null;
getPrimaryLine: () => SipLine | null;
hasSfu: () => boolean;
```