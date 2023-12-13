## ON_SHARE_SCREEN_STARTED

L'event `ON_SHARE_SCREEN_STARTED` se déclenche lorsqu'un utilisateur partage son écran.

```js
Wazo.Phone.on(Wazo.Phone.ON_SHARE_SCREEN_STARTED, onShareScreenStarted);
```

<div class="useless-tab-container">

- **Déclenchement**

  L'event `ON_SHARE_SCREEN_STARTED` se déclenche lorsqu'un utilisateur partage son écran.

  ```js
  Wazo.Phone.startScreenSharing(constraints, callSession);
  ```

  Plus d'informations sur la page [Partager du contenu](/fr/simpleapi/phone?id=partager-du-contenu)

- **Data**

  ```js
  {
  answered: true,
  answeredBySystem: undefined,
  answerTime: Date "date",
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
  screensharing: true, // !
  sipCallId: "id de l'appel Sip",
  sipStatus: "Established",
  startTime: Date "date",
  type: "CallSession",
  videoMuted: false,
  videoRemotelyDowngraded: undefined,
  }
  ```

- **Logique**

  Permet d'obtenir les informations à jour de `callSession`.  
  Seul celui qui initie le partage reçoit l'évènement.

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
      // écoute de l'évènement ON_SHARE_SCREEN_STARTED
      Wazo.Phone.on(Wazo.Phone.ON_SHARE_SCREEN_STARTED, onShareScreenStarted);
    };

    const onShareScreenStarted = async (callSession) => {
      const options = { audio: true, video: true };
      //const mediaStream = await navigator.mediaDevices.getDisplayMedia(options)
      const mediaStream = await Wazo.Phone.startScreenSharing(
        options,
        callSession
      );
      return mediaStream;
    };
  };
  ```

</div>
