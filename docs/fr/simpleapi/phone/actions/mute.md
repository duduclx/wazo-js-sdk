### mute

Permet de couper votre micro lors de l'appel, afin de ne pas être entendu par l'appelé.

```js
mute: (callSession: CallSession, withApi?: boolean) => void;
```

```js
Wazo.Phone.mute(callSession);
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
  `ON_CALL_MUTED`

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

    const mute = (callSession) => {
      setCallSessions((prevCallSessions) => {
        const newCallSessions = { ...prevCallSessions };
        // met à jour l'appel dans callSessions
        newCallSessions[callSession.getId()].muted = true;
        return newCallSessions;
      });
      // coupe le micro
      Wazo.Phone.mute(callSession);
    };
  };
  ```

</div>
