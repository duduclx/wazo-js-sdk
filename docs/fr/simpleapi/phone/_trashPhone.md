
reinvite: (callSession: CallSession, constraints: (Record<string, any> | null), conference: boolean) => Promise<OutgoingInviteRequest | void | null>;
startNetworkMonitoring: (callSession: CallSession, interval: number) => void;
stopNetworkMonitoring: (callSession: CallSession) => void;


getCurrentSipSession: () => Invitation | Inviter | null;
getLineById: (lineId: string) => SipLine | null;
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

checkSfu: () => void;
hasALocalVideoTrack: (callSession: CallSession) => boolean;
hasAVideoTrack: (callSession: CallSession) => boolean;
hasLocalVideo: (callSession: CallSession) => boolean;
hasSfu: () => boolean;
hasVideo: (callSession: CallSession) => boolean;
isVideoRemotelyHeld: (callSession: CallSession) => boolean;
