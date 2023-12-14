### hold

Permet de mettre en pause l'appel en cours.  
Une musique d'attente sera jouée à l'utilisateur mis en attente.

```js
hold(callSession: CallSession): Promise<void | OutgoingInviteRequest> | null | undefined
```

```js
Wazo.Phone.hold(callSession);
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
  `ON_CALL_HELD`

  Il déclenche aussi le websocket  
  CALL_HELD: "call_held"

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

    const hold = (callSession) => {
      setCallSessions((prevCallSessions) => {
        const newCallSessions = { ...prevCallSessions };
        // met l'appel en cours en pause dans callSession
        newCallSessions[callSession.getId()].pause = true;
        // met les autres appel comme actif dans callSession
        Object.keys(newCallSessions).forEach((key) => {
          if (key !== callSession.getId()) {
            newCallSessions[key].pause = false;
          }
        });
        return newCallSessions;
      });
      // met l'appel en cours en pause
      Wazo.Phone.hold(callSession);
    };
  };
  ```

</div>
