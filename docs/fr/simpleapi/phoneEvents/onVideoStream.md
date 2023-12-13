## ON_VIDEO_STREAM

L'event `ON_VIDEO_STREAM` se déclenche lorsqu'un appel vidéo est effectué.

```js
Wazo.Phone.on(Wazo.Phone.ON_VIDEO_STREAM, onVideoStream);
```

<div class="useless-tab-container">

- **Déclenchement**

  L'event `ON_VIDEO_STREAM` se déclenche lorsqu'un appel vidéo est effectué.

  ```js
  Wazo.Phone.call(number, withVideo)
  ```

  Plus d'informations sur la page [Passer un appel](/fr/simpleapi/phone?id=passer-un-appel)

- **Data**

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
      // écoute de l'évènement ON_VIDEO_STREAM
      Wazo.Phone.on(Wazo.Phone.ON_VIDEO_STREAM, onVideoStream);
    };

    const onVideoStream = (mediaStream) => {
      return mediaStream;
    };
  };
  ```

</div>
