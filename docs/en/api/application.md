# Application

**`Voice`**   **`Video`**  **`Chat`**   **`Fax`**  **`Status`**  **`Config`**

Use Applicationd to construct your own communication features.

```js
Wazo.application.calls(applicationUuid); // list calls
Wazo.application.hangupCall(applicationUuid, callId); // hangup a call
Wazo.application.answerCall(applicationUuid, callId, context, exten, autoanswer);  // answer a call
Wazo.application.listNodes(applicationUuid); // list nodes
Wazo.application.listCallsNodes(applicationUuid, nodeUuid); // list calls in a node
Wazo.application.removeCallNodes(applicationUuid, nodeUuid, callId); // remove call from node (no hangup)
Wazo.application.addCallNodes(applicationUuid, nodeUuid, callId); // add call in a node
Wazo.application.playCall(applicationUuid, callId, language, uri); // play a sound into a call
```