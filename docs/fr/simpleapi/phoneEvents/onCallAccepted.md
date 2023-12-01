### ON_CALL_ACCEPTED

L'event `ON_CALL_ACCEPTED` se déclenche lorsqu'un utilisateur accepte un appel entrant.

```js
Wazo.Phone.on(Wazo.Phone.ON_CALL_ACCEPTED, onCallAccepted);
```

<div class="useless-tab-container">

- **Déclenchement**

  L'event `ON_CALL_ACCEPTED` se déclenche lorsqu'un utilisateur accepte un appel entrant.
  
  ```js
  Wazo.Phone.accept(callSession, withVideo);
  ```
  Plus d'informations sur la page [Accepter un appel entrant](/fr/simpleapi/phone?id=accepter-un-appel-entrant)

- **Data**

  ```json
  {
  "toto": "lerigolo"
  }
  ```

- **Logique**

  Il ne déclenche pas d'évènement.

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
        // écoute de l'évènement ON_CALL_ACCEPTED
        Wazo.Phone.on(Wazo.Phone.ON_CALL_ACCEPTED, onCallAccepted);
    }

    const onCallAccepted = (callSession, withVideo) => {
      // enregistre l'appel accepté dans callSession comme appel actif
      setCallSession(callSession)
      // enregistre l'appel accepté dans callSessions comme appel disponible
      setCallSessions( (prevSessions) => (
        { ...prevSessions,
          [callSession.getId()]: callSession
        }
      ))
    }
  }
  ```

</div>