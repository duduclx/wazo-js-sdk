## ON_SHARE_SCREEN_ENDED

L'event `ON_SHARE_SCREEN_ENDED` se déclenche lorsqu'un utilisateur arrète un partage d'écran.

```js
Wazo.Phone.on(Wazo.Phone.ON_SHARE_SCREEN_ENDED, onShareScreenEnded);
```

<div class="useless-tab-container">

- **Déclenchement**

  L'event `ON_SHARE_SCREEN_ENDED` se déclenche lorsqu'un utilisateur arrète un partage d'écran.
  
  ```js
  Wazo.Phone.stopScreenSharing(callSession, restoreLocalStream)
  ```

- **Data**

  ```js
  null // ne retourne rien
  ```

- **Logique**

  Permet d'obtenir les informations à jour de `callSession`.  
  L'appelant et l'appellé reçoivent l'event.

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
        // écoute de l'évènement ON_SHARE_SCREEN_ENDED
        Wazo.Phone.on(Wazo.Phone.ON_SHARE_SCREEN_ENDED, onShareScreenEnded);
    }

    const onShareScreenEnded = () => {
      // restaurer le local Stream et le wazo Stream
    }
  }
  ```

</div>