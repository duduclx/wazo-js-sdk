## ON_TERMINATE_SOUND

L'event `ON_TERMINATE_SOUND` se déclenche lorsqu'un appel est décroché, ou autre évènement nécessitant d'informer qu'il faut stopper la sonnerie.

```js
Wazo.Phone.on(Wazo.Phone.ON_TERMINATE_SOUND, onTerminateSound);
```

<div class="useless-tab-container">

- **Déclenchement**

  L'event `ON_TERMINATE_SOUND` se déclenche lorsqu'un appel est décroché, ou autre évènement nécessitant d'informer qu'il faut stopper la sonnerie.

- **Data**

  ```js
  // ne retourne pas de donnée
  ```

- **Logique**

  Permet d'obtenir l'information qu'il faut arréter de jouer le son (appelant et appelé).

- **Exemple**

  voici un exemple dans un projet avec React :

  ```js
  import React, { useState } from "react";

  export const myComponent = () => {
    const [callSession, setCallSession] = useState({}); // contient l'appel actif
    const [callSessions, setCallSessions] = useState({}); // contient l'ensemble des appels (en cours et disponible)
    const audioRef = useRef(null);
    const [ringtone, setRingtone] = useState("./sounds/Ringtone.mp3"); // sonnerie appelé
    const callingRef = useRef(null);
    const [callTone, setCallTone] = useState("./sounds/Calling.mp3"); // sonnerie appelant

    const initializeWebRtc = async () => {
      // connexion à la ligne SIP
      await Wazo.Phone.connect({ audio: true, video: true });
      // écoute de l'évènement ON_TERMINATE_SOUND
      Wazo.Phone.on(Wazo.Phone.ON_TERMINATE_SOUND, onTerminateSound);
    };

    const onTerminateSound = () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.load();
      }
    
      if (callingRef.current) {
        callingRef.current.pause();
        callingRef.current.load();
      }
    };
  };
  ```

</div>
