### unmute

Il réactive le micro de l'utilisateur, afin que l'appelé entende de nouveau.

```js
Wazo.Phone.unmute(callSession);
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
  `ON_CALL_UNMUTED`

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

    const unmute = (callSession) => {
      setCallSessions((prevCallSessions) => {
        const newCallSessions = { ...prevCallSessions };
        // met à jour l'appel dans callSessions
        newCallSessions[callSession.getId()].muted = false;
        return newCallSessions;
      });
      // active le micro
      Wazo.Phone.unmute(callSession);
    };
  };
  ```

</div>
