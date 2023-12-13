## ON_PLAY_HANGUP_SOUND

L'event `ON_PLAY_HANGUP_SOUND` se déclenche lorsqu'un appel est raccroché.

```js
Wazo.Phone.on(Wazo.Phone.ON_PLAY_HANGUP_SOUND, onPlayHangupSound);
```

<div class="useless-tab-container">

- **Déclenchement**

  L'event `ON_PLAY_HANGUP_SOUND` se déclenche lorsqu'un appel est raccroché.

  ```js
   Wazo.Phone.hangup(callSession)
  ```

  Plus d'informations sur la page [Raccrocher un appel](/fr/simpleapi/phone?id=raccrocher-un-appel)

- **Data**

  ```js
  // ne retourne pas de donnée
  ```

- **Logique**

  Permet d'obtenir l'information qu'il faut jouer le son pour signaler que l'appel est raccroché.

- **Exemple**

  voici un exemple dans un projet avec React :

  ```js
  import React, { useState } from "react";

  export const myComponent = () => {
    const [callSession, setCallSession] = useState({}); // contient l'appel actif
    const [callSessions, setCallSessions] = useState({}); // contient l'ensemble des appels (en cours et disponible)
    let audioTune; // définit la variable pour jouer le fichier audio

    const initializeWebRtc = async () => {
      // connexion à la ligne SIP
      await Wazo.Phone.connect({ audio: true, video: true });
      // écoute de l'évènement ON_PLAY_HANGUP_SOUND
      Wazo.Phone.on(Wazo.Phone.ON_PLAY_HANGUP_SOUND, onPlayHangupSound);
    };

    const onPlayHangupSound = () => {
        audioTune = new Audio('./sounds/HangUp.mp3')
        audioTune.play();
    };
  };
  ```

</div>
