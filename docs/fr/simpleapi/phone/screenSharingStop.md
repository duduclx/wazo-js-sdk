## Arréter le partage

Permet d'arréter le partage de contenu lors d'un appel vidéo.

```js
Wazo.Phone.stopScreenSharing(callSession);
```

<div class="useless-tab-container">

- **Paramètres**

  `callSession` : objet CallSession  
  correspond à l'appel en cours.

- **Réponse**

  `void` :  
  Il ne retourne rien.

- **Evènement**

  Il déclenche les evènements.  
  ON_SHARE_SCREEN_ENDED  
  ON_SHARE_SCREEN_ENDING  

- **Exemple**

  ```js
  import React, { useState } from "react";

  export const myComponent = () => {
    const [callSession, setCallSession] = useState({}); // contient l'appel actif
    const [callSessions, setCallSessions] = useState({}); // contient l'ensemble des appels (en cours et disponible)

    const initializeWebRtc = async () => {
      // connexion à la ligne SIP
      await Wazo.Phone.connect({ audio: true, video: true });
    };

    const stopScreenSharing = (callSession) => {
      Wazo.Phone.stopScreenSharing(callSession);
    };
  };
  ```

</div>
