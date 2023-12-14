### hangup

Raccroche l'appel en cours.

```js
hangup: (callSession: CallSession) => Promise<boolean>;
```

```js
Wazo.Phone.hangup(callSession);
```

<div class="useless-tab-container">

- **Paramètres**

  `callSession` : objet CallSession  
  correspond à l'appel en cours.

- **Réponse**

  `promise` : (boolean)  
  Il retourne true ou false.

- **Evènement**

  Il déclenche l'évènement.
  `ON_CALL_ENDED`

  Il déclenche aussi le websocket  
  CALL_LOG_USER_CREATED: "call_log_user_created"

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

    const hangUpCall = async (callSession) => {
      // raccroche l'appel en cours
      await Wazo.Phone.hangup(callSession);
    }
  }
  ```

</div>
