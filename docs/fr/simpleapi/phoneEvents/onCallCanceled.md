## ON_CALL_CANCELED

L'event `ON_CALL_CANCELED` se déclenche lorsqu'un appel est annulé.

```js
Wazo.Phone.on(Wazo.Phone.ON_CALL_CANCELED, onCallCanceled);
```

<div class="useless-tab-container">

- **Déclenchement**

  L'event `ON_CALL_CANCELED` se déclenche lorsqu'un appel est annulé.

- **Data**

  ```json
  {
  
  }
  ```

- **Logique**

  Permet d'obtenir les informations à jour de `callSession`.

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
        // écoute de l'évènement ON_CALL_CANCELED
        Wazo.Phone.on(Wazo.Phone.ON_CALL_CANCELED, onCallCanceled);
    }

    const onCallCanceled = (callSession) => {
       // obtenir l'id de l'appel à retirer
      const callSessionId = callSession.getId();
      // retiré des appels disponibles dans callSessions
      setCallSessions((prevCallSessions) => {
        const newCallSessions = { ...prevCallSessions };
        delete newCallSessions[callSessionId];
        return newCallSessions;
      });
      // retiré l'appel de l'appel en cours CallSession
      setCallSession({});
    }
  }
  ```

</div>