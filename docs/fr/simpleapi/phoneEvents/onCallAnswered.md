## ON_CALL_ANSWERED

L'event `ON_CALL_ANSWERED` se déclenche lorsqu'un appel est répondu.

```js
Wazo.Phone.on(Wazo.Phone.ON_CALL_ANSWERED, onCallAnswered);
```

<div class="useless-tab-container">

- **Déclenchement**

  L'event `ON_CALL_ANSWERED` se déclenche lorsqu'un appel est répondu.  
  Cela permet de savoir lorsqu'un appel est décroché autrement que par un client wazo.

- **Data**

  ```js
  {
  answered: true, // !
  answeredBySystem: undefined,
  answerTime: Date "date", // !
  autoAnswer: false,
  call: undefined,
  callId: undefined,
  callerNumber: undefined,
  cameraEnabled: false,
  conference: false,
  creationTime: Date "date",
  dialedExtension: "",
  displayName: "prénom nom",
  endTime: null,
  ignored: false,
  isCaller: true,
  muted: false,
  number: "numéro",
  paused: false,
  recording: false,
  recordingPaused: false,
  ringing: false,
  screensharing: false,
  sipCallId: "id de l'appel Sip",
  sipStatus: "Established", // !
  startTime: Date "date",
  type: "CallSession",
  videoMuted: false,
  videoRemotelyDowngraded: undefined,
  }
  ```

- **Logique**

  Permet d'obtenir les informations à jour de `callSession`.  
  L'appelant et l'appellé reçoivent l'event.

- **Exemple**

  voici un exemple dans un projet avec React :
  
  ```js
  import React, { useState } from "react";
  
  export const myComponent = () => {
    const [callSession, setCallSession] = useState({}); // contient l'appel actif
    const [callSessions, setCallSessions] = useState({}); // contient l'ensemble des appels (en cours et disponible)

    const initializeWebRtc = async () => {
        // connexion à la ligne SIP
        await Wazo.Phone.connect({ audio: true, video: true });
        // écoute de l'évènement ON_CALL_ANSWERED
        Wazo.Phone.on(Wazo.Phone.ON_CALL_ANSWERED, onCallAnswered);
    }

    const onCallAnswered = (callSession) => {
      // enregistre l'appel accepté dans callSession comme appel actif
      setCallSession(callSession)
      // enregistre l'appel accepté dans callSessions comme appel disponible
      setCallSessions( (prevSessions) => (
        { ...prevSessions,
          [callSession.getId()]: callSession
        }
      ))
    }
  }
  ```

</div>