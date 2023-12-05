## partager du contenu

Permet de partager du contenu lors d'un appel vidéo.

```js
Wazo.Phone.startScreenSharing(constraints, callSession);
```

<div class="useless-tab-container">

- **Paramètres**

  `constraints` : objet  
  Il est possible de configurer les contraintes au niveau du son et de vidéo du navigateur de l'utilisateur.  
  Plus d'informations sur [getUserMedia](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia)

  ```js
  {
    audio: boolean,
    video: boolean
  }
  ```

  `callSession` : objet CallSession  
  correspond à l'appel en cours.

- **Réponse**

  `mediaStream` :  
  Il retourne le stream.

- **Evènement**

  Il déclenche les évènements :  
  ON_SHARE_SCREEN_STARTED

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

    const startScreenSharing = async (callSession) => {
      // défini l'audio et la vidéo pour le partage
      const options = { audio: true, video: true };
      // lance le partage
      const mediaStream = await Wazo.Phone.startScreenSharing(
        options,
        callSession
      );
      return mediaStream;
    };
  };
  ```

</div>
