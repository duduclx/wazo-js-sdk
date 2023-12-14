### resume

Permet d'enlever la pause de l'appel en cours (mis en attente).

```js
resume: (callSession: CallSession) => Promise<MediaStream | null | void>;
```

```js
Wazo.Phone.resume(callSession);
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
  `ON_CALL_RESUMED`

  Il déclenche aussi le websocket  
  CALL_RESUMED: "call_resumed"

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

    const unhold = (callSession) => {
      setCallSessions((prevCallSessions) => {
        const newCallSessions = { ...prevCallSessions };
        const sessionId = callSession.getId();
        // met à jour l'appel actuel n'étant plus en pause
        newCallSessions[sessionId].pause = false;
        // met à jour les autres appels comme étant en pause
        Object.keys(newCallSessions).forEach((key) => {
          if (key !== sessionId) {
            newCallSessions[key].pause = true;
          }
        });

        return newCallSessions;
      });
      // reprend l'appel mis en attente
      Wazo.Phone.resume(callSession);
    };
  };
  ```

</div>
