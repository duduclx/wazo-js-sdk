mettre les type de valeur des paramètres

faire l'ensemble des fonctions disponible dans Wazo.Phone

lister les events

faire l'enesmble des Wazo.Phone.on('event', callback)

mettre à jour les liens entre les fonctions et les events

pensez aux websocket également, notamment on_call_created et on_call_updated

# api / auth
reprendre les fonctions !

# phone
reprendre le menu avec le nom des fonctions
et faire toutes les fonctions disponibles dans _trashPhone.md !!

# callSession
revoir la mise en page et compléter !
les propriétés callsession et callsession.call
les méthodes

# atxfer et conference

- fournir un objet 
- détailler l'exemple


## phone events

pour les ON_CALL définir la propriété qui change afin de faciliter la lecture du data !!

ps: soucis sur le partage, mes exemples ne sont pas bon car je n'ai pas fini cette partie

MESSAGE_TYPE_CHAT * supprimable
MESSAGE_TYPE_SIGNAL * supprimable
ON_AUDIO_STREAM -
ON_CALL_ACCEPTED *
ON_CALL_ANSWERED *
ON_CALL_CANCELED - ?
ON_CALL_ENDED *
ON_CALL_ENDING - ?
ON_CALL_ERROR -
ON_CALL_FAILED -
ON_CALL_HELD *
ON_CALL_INCOMING *
ON_CALL_MUTED *
ON_CALL_OUTGOING - ?
ON_CALL_REJECTED - je n'attrape rien ! ??
ON_CALL_RESUMED *
ON_CALL_UNHELD *
ON_CALL_UNMUTED *
ON_CAMERA_DISABLED *
ON_CAMERA_RESUMED *
ON_CHAT *
ON_DISCONNECTED -
ON_EARLY_MEDIA -
ON_MESSAGE *
ON_MESSAGE_TRACK_UPDATED -
ON_NETWORK_STATS -
ON_PLAY_HANGUP_SOUND *
ON_PLAY_INBOUND_CALL_SIGNAL_SOUND *
ON_PLAY_PROGRESS_SOUND *
ON_PLAY_RING_SOUND *
ON_PROGRESS -
ON_REGISTERED -
ON_REINVITE
ON_REMOVE_STREAM -
ON_SHARE_SCREEN_ENDED - en cours
ON_SHARE_SCREEN_ENDING - ??
ON_SHARE_SCREEN_STARTED - en cours
ON_SIGNAL *
ON_TERMINATE_SOUND *
ON_TRACK -
ON_UNREGISTERED -
ON_USER_AGENT -
ON_VIDEO_INPUT_CHANGE -
ON_VIDEO_STREAM *

# websocket

AGENT_PAUSED: "agent_paused"
AGENT_STATUS_UPDATE: "agent_status_update"
AGENT_UNPAUSED: "agent_unpaused"
APPLICATION_CALL_ANSWERED: "application_call_answered"
APPLICATION_CALL_DELETED: "application_call_deleted"
APPLICATION_CALL_DTMF_RECEIVED: "application_call_dtmf_received"
APPLICATION_CALL_ENTERED: "application_call_entered"
APPLICATION_CALL_INITIATED: "application_call_initiated"
APPLICATION_CALL_UPDATED: "application_call_updated"
APPLICATION_DESTINATION_NODE_CREATED: "application_destination_node_created"
APPLICATION_NODE_CREATED: "application_node_created"
APPLICATION_NODE_DELETED: "application_node_deleted"
APPLICATION_NODE_UPDATED: "application_node_updated"
APPLICATION_PLAYBACK_CREATED: "application_playback_created"
APPLICATION_PLAYBACK_DELETED: "application_playback_deleted"
APPLICATION_PROGRESS_STARTED: "application_progress_started"
APPLICATION_PROGRESS_STOPPED: "application_progress_stopped"
APPLICATION_SNOOP_CREATED: "application_snoop_created"
APPLICATION_SNOOP_DELETED: "application_snoop_deleted"
APPLICATION_SNOOP_UPDATED: "application_snoop_updated"
APPLICATION_USER_OUTGOING_CALL_CREATED: "application_user_outgoing_call_created"
AUTH_SESSION_EXPIRE_SOON: "auth_session_expire_soon"
AUTH_USER_EXTERNAL_AUTH_ADDED: "auth_user_external_auth_added"
AUTH_USER_EXTERNAL_AUTH_DELETED: "auth_user_external_auth_deleted"
CALL_ANSWERED: "call_answered"
CALL_CREATED: "call_created"
CALL_DTMF_CREATED: "call_dtmf_created"
CALL_ENDED: "call_ended"
CALL_HELD: "call_held"
CALL_LOG_USER_CREATED: "call_log_user_created"
CALL_RESUMED: "call_resumed"
CALL_UPDATED: "call_updated"
CHATD_PRESENCE_UPDATED: "chatd_presence_updated"
CHATD_USER_ROOM_CREATED: "chatd_user_room_created"
CHATD_USER_ROOM_MESSAGE_CREATED: "chatd_user_room_message_created"
CHAT_MESSAGE_RECEIVED: "chat_message_received"
CHAT_MESSAGE_SENT: "chat_message_sent"
CONFERENCE_ADHOC_DELETED: "conference_adhoc_deleted"
CONFERENCE_ADHOC_PARTICIPANT_LEFT: "conference_adhoc_participant_left"
CONFERENCE_USER_PARTICIPANT_JOINED: "conference_user_participant_joined"
CONFERENCE_USER_PARTICIPANT_LEFT: "conference_user_participant_left"
CONFERENCE_USER_PARTICIPANT_TALK_STARTED: "conference_user_participant_talk_started"
CONFERENCE_USER_PARTICIPANT_TALK_STOPPED: "conference_user_participant_talk_stopped"
ENDPOINT_STATUS_UPDATE: "endpoint_status_update"
FAVORITE_ADDED: "favorite_added"
FAVORITE_DELETED: "favorite_deleted"
FAX_OUTBOUND_USER_CREATED: "fax_outbound_user_created"
FAX_OUTBOUND_USER_FAILED: "fax_outbound_user_failed"
FAX_OUTBOUND_USER_SUCCEEDED: "fax_outbound_user_succeeded"
HEARTBEAT_ENGINE_VERSION: "20.09"
INITIALIZED: "initialized"
LINE_STATUS_UPDATED: "line_status_updated"
MEETING_USER_GUEST_AUTHORIZATION_CREATED: "meeting_user_guest_authorization_created"
MEETING_USER_PARTICIPANT_JOINED: "meeting_user_participant_joined"
MEETING_USER_PARTICIPANT_LEFT: "meeting_user_participant_left"
MEETING_USER_PROGRESS: "meeting_user_progress"
ON_AUTH_FAILED: "on_auth_failed"
ON_CLOSE: "onclose"
ON_ERROR: "onerror"
ON_MESSAGE: "onmessage"
ON_OPEN: "onopen"
SWITCHBOARD_HELD_CALLS_UPDATED: "switchboard_held_calls_updated"
SWITCHBOARD_HELD_CALL_ANSWERED: "switchboard_held_call_answered"
SWITCHBOARD_QUEUED_CALLS_UPDATED: "switchboard_queued_calls_updated"
SWITCHBOARD_QUEUED_CALL_ANSWERED: "switchboard_queued_call_answered"
TRUNK_STATUS_UPDATED: "trunk_status_updated"
USERS_FORWARDS_BUSY_UPDATED: "users_forwards_busy_updated"
USERS_FORWARDS_NOANSWER_UPDATED: "users_forwards_noanswer_updated"
USERS_FORWARDS_UNCONDITIONAL_UPDATED: "users_forwards_unconditional_updated"
USERS_SERVICES_DND_UPDATED: "users_services_dnd_updated"
USER_STATUS_UPDATE: "user_status_update"
USER_VOICEMAIL_MESSAGE_CREATED: "user_voicemail_message_created"
USER_VOICEMAIL_MESSAGE_DELETED: "user_voicemail_message_deleted"
USER_VOICEMAIL_MESSAGE_UPDATED: "user_voicemail_message_updated"