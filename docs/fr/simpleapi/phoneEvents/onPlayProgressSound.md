## ON_PLAY_PROGRESS_SOUND

L'event `ON_PLAY_PROGRESS_SOUND` se déclenche lorsqu'un appel est lancé (sonnerie de l'appelant).

```js
Wazo.Phone.on(Wazo.Phone.ON_PLAY_PROGRESS_SOUND, onPlayProgressSound);
```

<div class="useless-tab-container">

- **Déclenchement**

  L'event `ON_PLAY_PROGRESS_SOUND` se déclenche lorsqu'un appel est lancé (sonnerie de l'appelant).

  ```js
  Wazo.Phone.call(number, withVideo);
  ```

  Plus d'informations sur la page [Passer un appel](/fr/simpleapi/phone?id=passer-un-appel)

- **Data**

  ```js
  // ne retourne pas de donnée
  ```

- **Logique**

  Permet d'obtenir l'information qu'il faut jouer le son pour signaler que l'appel est en cours (sonnerie de l'appelant).

- **Exemple**

  voici un exemple dans un projet avec React :

  ```js
  import React, { useState } from "react";

  export const myComponent = () => {
    const [callSession, setCallSession] = useState({}); // contient l'appel actif
    const [callSessions, setCallSessions] = useState({}); // contient l'ensemble des appels (en cours et disponible)
    const callingRef = useRef(null);
    const [callTone, setCallTone] = useState("./sounds/Calling.mp3");

    const initializeWebRtc = async () => {
      // connexion à la ligne SIP
      await Wazo.Phone.connect({ audio: true, video: true });
      // écoute de l'évènement ON_PLAY_PROGRESS_SOUND
      Wazo.Phone.on(Wazo.Phone.ON_PLAY_PROGRESS_SOUND, onPlayProgressSound);
    };

    const onPlayProgressSound = () => {
      callingRef.current.play();
    };
    
    const PhoneSoundCalling = () => {
        return <audio ref={callingRef} src={callTone} />;
    };
  };

  ```

</div>
