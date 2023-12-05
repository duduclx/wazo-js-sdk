## Désactiver la caméra

Permet de désactiver la caméra lors d'un appel vidéo.

```js
Wazo.Phone.turnCameraOn(callSession);
```

<div class="useless-tab-container">

- **Paramètres**

  `callSession` : objet CallSession  
  correspond à l'appel en cours.

- **Réponse**

  `void` :  
  Il ne retourne rien.

- **Evènement**

  Il déclenche l'évènement.  
  `ON_CAMERA_DISABLED`

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

    const turnCameraOff = (callSession) => {
      // désactive la caméra
      Wazo.Phone.turnCameraOff(callSession);
    };
  };
  ```

</div>
