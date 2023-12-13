# Calld

**`Voice`**   **`Video`**  **`Chat`**   **`Fax`**  **`Status`**

Use Calld to directly control interactions.
(Please note, ctidNg endpoint is deprecated but continue to work with old version. **Please update your code**.)

```js
Wazo.calld.getConferenceParticipantsAsUser(conferenceId); // List participants of a conference the user is part of
Wazo.calld.answerSwitchboardQueuedCall(switchboardUuid, callId);
Wazo.calld.answerSwitchboardHeldCall(switchboardUuid, callId);
Wazo.calld.cancelCall(callId);
Wazo.calld.deleteVoicemail(voicemailId);
Wazo.calld.fetchSwitchboardHeldCalls(switchboardUuid);
Wazo.calld.fetchSwitchboardQueuedCalls(switchboardUuid);
Wazo.calld.getConferenceParticipantsAsUser(conferenceId);
Wazo.calld.getPresence(contactUuid); //deprecated use chatd in ctidNg, don't work with calld
Wazo.calld.getStatus(lineUuid); //deprecated use chatd in ctidNg, don't work with calld
Wazo.calld.holdSwitchboardCall(switchboardUuid, callId);
Wazo.calld.listCalls();
Wazo.calld.listMessages(participantUuid, limit);
Wazo.calld.listVoicemails();
Wazo.calld.makeCall(extension, fromMobile, lineId, allLines);
Wazo.calld.sendFax(extension, fax, callerId);
Wazo.calld.sendMessage(alias, msg, toUserId);
Wazo.calld.relocateCall(callId, destination, lineId);
Wazo.calld.updatePresence(presence);
```