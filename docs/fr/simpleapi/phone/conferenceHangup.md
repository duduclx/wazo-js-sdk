## Terminer une conférence (adhoc)

Met fin à la conférence pour l'ensemble des participants.  
Il sera nécessaire d'avoir les informations de l'appel dans `callSession.call`.  
Pour cela, il faudra obligatoirement utiliser l'évènement `Wazo.websocket.on('call_updated', onCallUpdated)` afin d'obtenir les informations requises.

```js
adHocConference.hangup();
```

<div class="useless-tab-container">

- **Paramètres**

  aucun.

- **Réponse**

  `adHocConference ` :  
  Il retourne la conférence, avec les informations et les fonctions utiles.  
  Notemment avec les valeurs:
  ```json
  {
    ...adhocConference,
    "finished": true,
    "participant": [],
  }
  ```

- **Evènement**

  Il déclenche le websocket.  
  CONFERENCE_ADHOC_DELETED: "conference_adhoc_deleted"

- **Exemple**

  ```js
  import React, { useState } from "react";

  export const myComponent = () => {
    const [callSession, setCallSession] = useState({}); // contient l'appel actif
    const [callSessions, setCallSessions] = useState({}); // contient l'ensemble des appels (en cours et disponible)
    const [conference, setConference] = useState(null); // contient la conférence

    const initializeWebRtc = async () => {
      // connexion à la ligne SIP
      await Wazo.Phone.connect({ audio: true, video: true });
    };

    const removeParticipant = () => {
      // retire l'appel de la conférence
      conference.hangup();
    };
  };
  ```

</div>