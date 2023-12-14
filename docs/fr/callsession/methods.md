## les méthodes

- `answer(); `

disableCamera();

enableCamera();

getElapsedTimeInSeconds();

getId();

getTalkingToIds();

hasAnInitialInterceptionNumber();

hold();

ignore();

`is();` boolean  
Permet de comparer un objet CallSession à un autre objet Callsession afin de savoir si il s'agit du même appel.  
exemple:

```js
if (callSession.is(callSessionTocheck)) {
  // do something !
}
```

isActive();

isAnInterception();

isAnswered();

isAnsweredBySystem();

isCameraEnabled();

isConference();

isEstablished();

isId();

isIgnored();

isIncoming();

isMuted();

isOnHold();

isOutgoing();

isRecording();

isRinging();

isScreenSharing();

isTerminated();

isTerminating();

isVideoMuted();

isVideoRemotelyDowngraded();

mute();

muteVideo();

recordingIsPaused();

resume();

separateDisplayName();

setIsConference();

setVideoRemotelyDowngraded();

startScreenSharing();

stopScreenSharing();

systemAnswer();

toJSON();

unmute();

unmuteVideo();

updateFrom();