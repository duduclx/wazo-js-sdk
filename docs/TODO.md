mettre les type de valeur des paramètres

faire l'ensemble des fonctions disponible dans Wazo.Phone

lister les events

faire l'enesmble des Wazo.Phone.on('event', callback)

mettre à jour les liens entre les fonctions et les events

pensez aux websocket également, notamment on_call_created et on_call_updated



# atxfer et conference

- fournir un objet 
- détailler l'exemple

conférence quit
Attention ! si on veut quitter que nous, il faut utiliser 
adHocconference.phone.currentCallSession qui a son call : undefined
et mettre son id à soi
afin d'avoir le talkingtoids [0] = à son id !!


## phone events

MESSAGE_TYPE_CHAT -
MESSAGE_TYPE_SIGNAL -
ON_AUDIO_STREAM -
ON_CALL_ACCEPTED *
ON_CALL_ANSWERED -
ON_CALL_CANCELED -
ON_CALL_ENDED -
ON_CALL_ENDING -
ON_CALL_ERROR -
ON_CALL_FAILED -
ON_CALL_HELD -
ON_CALL_INCOMING *
ON_CALL_MUTED -
ON_CALL_OUTGOING -
ON_CALL_REJECTED -
ON_CALL_RESUMED -
ON_CALL_UNHELD -
ON_CALL_UNMUTED -
ON_CAMERA_DISABLED -
ON_CAMERA_RESUMED -
ON_CHAT -
ON_DISCONNECTED -
ON_EARLY_MEDIA -
ON_MESSAGE -
ON_MESSAGE_TRACK_UPDATED -
ON_NETWORK_STATS -
ON_PLAY_HANGUP_SOUND -
ON_PLAY_INBOUND_CALL_SIGNAL_SOUND -
ON_PLAY_PROGRESS_SOUND -
ON_PLAY_RING_SOUND -
ON_PROGRESS -
ON_REGISTERED -
ON_REINVITE
ON_REMOVE_STREAM -
ON_SHARE_SCREEN_ENDED -
ON_SHARE_SCREEN_ENDING -
ON_SHARE_SCREEN_STARTED -
ON_SIGNAL -
ON_TERMINATE_SOUND -
ON_TRACK -
ON_UNREGISTERED -
ON_USER_AGENT -
ON_VIDEO_INPUT_CHANGE -
ON_VIDEO_STREAM -