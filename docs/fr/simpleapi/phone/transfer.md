## Transférer un appel (direct)

Le transfère d'appel direct permet de rediriger l'appel directement vers le numéro cible.

```js
Wazo.Phone.transfer(callSession, target)
```

<div class="useless-tab-container">

- **Paramètres**

  `callSession` : objet CallSession  
  correspond à l'appel reçu.

  `target` : string  
  correspond au numéro de téléphone à qui transférer l'appel.

- **Réponse**

  `void` :  
  Il ne retourne pas de réponse.

- **Evènement**

  Il déclenche l'évènement:  
  [`ON_CALL_INCOMING`](fr/simpleapi/phoneEvents/onCallIncoming.md)

  Cet évènement sera reçu par l'appelé.

  on call outgoing ??
  on call ended ??

- **Exemple**

  ```js
  import React, { useState } from "react";

  export const myComponent = () => {
    const [callSession, setCallSession] = useState({}); // contient l'appel actif
    const [callSessions, setCallSessions] = useState({}); // contient l'ensemble des appels (en cours et disponible)
    const [target, setTarget] = useState(""); // le numéro cible du transfert d'appel

    const initializeWebRtc = async () => {
        // connexion à la ligne SIP
        await Wazo.Phone.connect({ audio: true, video: true });
    };

    const directTransfer = (callSession, target) => {
      Wazo.Phone.transfer(callSession,target)
      setCallSessions((prevCallSessions) => {
        const newCallSessions = { ...prevCallSessions };
        delete newCallSessions[callSession.getId()];
        return newCallSessions;
      });
    }
  }
  ```

</div>