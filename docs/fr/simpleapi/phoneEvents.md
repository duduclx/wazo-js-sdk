# Phone Events

Liste des évènements disponible dans `Wazo.Phone`.

Tous les évènements fonctionne avec un nom d'évènement et un callback
```js
Wazo.Phone.on(Wazo.Phone.EVENT, callback)
```

Le callback renvoi un objet `data` contenant les informations liés à l'event.

## call events

Il s'agit des évènements directement liés à un appel audio.

[filename](phoneEvents/onCallIncoming.md ':include')

[filename](phoneEvents/onCallAccepted.md ':include')

[filename](phoneEvents/onCallRejected.md ':include')


## media events

Il s'agit des évènements directement liés à un appel vidéo.

## chat events

Il s'agit des évènements directement liés aux fonctions de chat durant un appel audio/video.

### MESSAGE_TYPE_CHAT


MESSAGE_TYPE_CHAT
MESSAGE_TYPE_SIGNAL
ON_AUDIO_STREAM
ON_CALL_ACCEPTED *
ON_CALL_ANSWERED
ON_CALL_CANCELED
ON_CALL_ENDED
ON_CALL_ENDING
ON_CALL_ERROR
ON_CALL_FAILED
ON_CALL_HELD
ON_CALL_INCOMING *
ON_CALL_MUTED
ON_CALL_OUTGOING
ON_CALL_REJECTED
ON_CALL_RESUMED
ON_CALL_UNHELD
ON_CALL_UNMUTED
ON_CAMERA_DISABLED
ON_CAMERA_RESUMED
ON_CHAT
ON_DISCONNECTED
ON_EARLY_MEDIA
ON_MESSAGE
ON_MESSAGE_TRACK_UPDATED
ON_NETWORK_STATS
ON_PLAY_HANGUP_SOUND
ON_PLAY_INBOUND_CALL_SIGNAL_SOUND
ON_PLAY_PROGRESS_SOUND
ON_PLAY_RING_SOUND
ON_PROGRESS
ON_REGISTERED
ON_REINVITE
ON_REMOVE_STREAM
ON_SHARE_SCREEN_ENDED
ON_SHARE_SCREEN_ENDING
ON_SHARE_SCREEN_STARTED
ON_SIGNAL
ON_TERMINATE_SOUND
ON_TRACK
ON_UNREGISTERED
ON_USER_AGENT
ON_VIDEO_INPUT_CHANGE
ON_VIDEO_STREAM