## Quitter une conférence (adhoc)

Permet de quitter la conférence sans mettre fin à la conférence.  
Il sera nécessaire d'avoir les informations de l'appel dans `callSession.call`.  
Pour cela, il faudra obligatoirement utiliser l'évènement `Wazo.websocket.on('call_updated', onCallUpdated)` afin d'obtenir les informations requises.

```js
adHocConference.removeParticipant(callSession);
```

<div class="useless-tab-container">

- **Paramètres**

  `callSession` : objet CallSession  
  correspond à l'appel en cours à retirer.

- **Réponse**

  `adHocConference ` :  
  Il retourne la conférence, avec les informations et les fonctions utiles.

- **Evènement**

  Il déclenche le websocket.  
  CONFERENCE_ADHOC_PARTICIPANT_LEFT: "conference_adhoc_participant_left"

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

    const removeParticipant = async (callSession) => {
      // retire l'appel de la conférence
      conference.removeParticipant(callSession);
    };
  };
  ```

</div>