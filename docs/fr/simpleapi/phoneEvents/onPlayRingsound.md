## ON_PLAY_RING_SOUND

L'event `ON_PLAY_RING_SOUND` se déclenche lorsqu'un appel est reçu (sonnerie de l'appelé).

```js
Wazo.Phone.on(Wazo.Phone.ON_PLAY_RING_SOUND, onPlayRingSound);
```

<div class="useless-tab-container">

- **Déclenchement**

  L'event `ON_PLAY_RING_SOUND` se déclenche lorsqu'un appel est reçu (sonnerie de l'appelé).

- **Data**

  ```js
  // ne retourne pas de donnée
  ```

- **Logique**

  Permet d'obtenir l'information qu'il faut jouer le son pour signaler que l'appel est en cours (sonnerie de l'appelé).

- **Exemple**

  voici un exemple dans un projet avec React :

  ```js
  import React, { useState } from "react";

  export const myComponent = () => {
    const [callSession, setCallSession] = useState({}); // contient l'appel actif
    const [callSessions, setCallSessions] = useState({}); // contient l'ensemble des appels (en cours et disponible)
    const audioRef = useRef(null);
    const [ringtone, setRingtone] = useState('./sounds/Ringtone.mp3');

    const initializeWebRtc = async () => {
      // connexion à la ligne SIP
      await Wazo.Phone.connect({ audio: true, video: true });
      // écoute de l'évènement ON_PLAY_RING_SOUND
      Wazo.Phone.on(Wazo.Phone.ON_PLAY_RING_SOUND, onPlayRingSound);
    };

    const onPlayRingSound = () => {
      audioRef.current.play();
    };

    const PhoneSounds = () => {
      return <audio ref={audioRef} src={ringtone} />;
    };
  };
  ```

</div>
