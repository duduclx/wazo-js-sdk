## ON_CALL_INCOMING

L'event `ON_CALL_INCOMING` permet de signaler un appel entrant et d'obtenir les informations de l'appel.  
Il faudra stocker ces informations dans l'objet `callSession` et `callSessions`.

```js
Wazo.Phone.on(Wazo.Phone.ON_CALL_INCOMING, OnIncomingCall);
```

<div class="useless-tab-container">

- **Déclenchement**

  L'event `ON_CALL_INCOMING` se déclenche lorsqu'un utilisateur reçoit un appel.

  Dans `Wazo.Phone`, la fonction suivante déclenche cet évènement.

  ```js
  Wazo.Phone.call(number, withVideo);
  ```

  Plus d'informations sur la page [Passer un appel](/fr/simpleapi/phone?id=passer-un-appel)

- **Data**

  ```js
  {
  answerTime: null,
  answeredBySystem: undefined,
  answered: false, // !
  autoAnswer: false,
  call: undefined,
  callId: undefined,
  callerNumber: undefined,
  cameraEnabled: false,
  conference: false,
  creationTime: Date "date", // !
  dialedExtension: "",
  displayName: "prénom nom", // !
  endTime: null,
  ignored: false,
  isCaller: false,
  muted: false,
  number: "numéro", // !
  paused: false,
  recording: false,
  recordingPaused: false,
  ringing: true,
  screensharing: false,
  sipCallId: "id de l'appel Sip",
  sipSession: {} // objet complexe de la session Sip en cours,
  sipStatus: "Initial", // !
  startTime: Date "date", // !
  type: "CallSession",
  videoMuted: false,
  videoRemotelyDowngraded: undefined,
  };
  ```

- **Logique**

  Il faut avertir l'utilisateur de l'appel entrant en mettant à jour l'objet CallSession qui représente l'appel en cours,
  et proposer à l'utilisateur des boutons pour accepter ou rejeter l'appel.

  Il doit donc pouvoir utiliser les fonctions suivantes :

  ```js
  Wazo.Phone.accept(callSession, withVideo); // pour accepter l'appel entrant
  Wazo.Phone.reject(callSession); // pour rejeter l'appel entrant
  ```

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
      // écoute de l'évènement ON_CALL_INCOMING
      Wazo.Phone.on(Wazo.Phone.ON_CALL_INCOMING, onCallIncoming);
    };

    const onCallIncoming = (callSession) => {
      // afficher le incomingCall
      setIncomingCall(true);
      // enregistre l'appel accepté dans callSession comme appel actif
      setCallSession(callSession);
      // enregistre l'appel accepté dans callSessions comme appel disponible
      setCallSessions((prevSessions) => ({
        ...prevSessions,
        [callSession.getId()]: callSession,
      }));
    };
  };
  ```

</div>
