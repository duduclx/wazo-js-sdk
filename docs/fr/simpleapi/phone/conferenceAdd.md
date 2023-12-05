## Ajouter un participant (adhoc)

Permet d'ajouter un intervenant à partir d'un appel en cours.  
Il sera nécessaire d'avoir les informations de l'appel dans `callSession.call`.  
Pour cela, il faudra obligatoirement utiliser l'évènement `Wazo.websocket.on('call_updated', onCallUpdated)` afin d'obtenir les informations requises.

```js
adHocConference.addParticipant(participant);
```

<div class="useless-tab-container">

- **Paramètres**

  `callSession` : objet CallSession  
  correspond à l'appel en cours à ajouter.

- **Réponse**

  `adHocConference ` :  
  Il retourne la conférence, avec les informations et les fonctions utiles.

- **Evènement**

  Il ne déclenche pas d'évènement.

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

    const addParticipant = async (callSession) => {
      // ajout de l'appel en cours à la conférence
      conference.addParticipant(callSession);
    };
  };
  ```

</div>
