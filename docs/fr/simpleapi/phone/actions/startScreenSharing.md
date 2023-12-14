### startScreenSharing

Permet de partager du contenu lors d'un appel vidéo.

```js
startScreenSharing: (constraints: Record<string, any>, callSession?: CallSession) => Promise<MediaStream | null>;
```

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
  ```js
  {
    active: true,
    id: "{86b04623-6221-4c89-ac16-a8d06c0ad50c}",
    local: true,
    onaddtrack: null,
    onremovetrack: null
    <prototype>: MediaStreamPrototype {
      addTrack();
      clone();
      getAudioTrack();
      getTrackById();
      getTracks();
      getVideoTracks();
      removeTrack();
      <prototype>: EventTargetPrototype {
        addEventListener();
        dispatchEvent();
        removeEventListener();
      }
    }
  }
  ```

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
      // Obtenir le MediaStream de l'écran avec les options spécifiées
      const screenStream = await navigator.mediaDevices.getDisplayMedia({ audio: true, video: true });

      // Obtenir le MediaStream de la fonction startScreenSharing de Wazo.Phone
      const wazoStream = await Wazo.Phone.startScreenSharing({ audio: true, video: true }, callSession);

      // Ajouter les pistes du screenStream à wazoStream
      screenStream.getTracks().forEach(track => {
        wazoStream.addTrack(track);
      });

      // Retourner le MediaStream combiné
      return wazoStream;
    };

  ```

</div>
