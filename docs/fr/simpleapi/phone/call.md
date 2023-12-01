## Passer un appel

```js
const callSession = await Wazo.Phone.call(number, withVideo);
```

<div class="useless-tab-container">

- **Paramètres**

  `number` : string  
  correspond au numéro de téléphone.

  `withVideo` : boolean (optionnel, false par défaut)  
  Il est possible de renseigner si il s'agit d'un appel audio ou vidéo.  
  la valeur par défaut est: `false`

- **Réponse**

  `callSession` :  
  Il rétourne l'objet de l'appel en cours.

  Nous considérons ici que nous conservons les appels dans deux objets :  
  `callSession` = l'appel en cours  
  `callSessions` = un objet contenant l'ensemble des appels (en cours et en attente)

- **Evènement**

  Il déclenche un évènement qui sera joué à l'utilisateur appelé :  
  [`ON_CALL_INCOMING`](fr/simpleapi/phoneEvents/onCallIncoming.md)

  Il déclenche aussi un WebSocket qui sera joué à l'appelant et à l'appelé :  
  Ici mettre lien vers Websock/on_call_created

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

    const call = async (number, video = false) => {
      // créer l'appel
      const callSession = await Wazo.Phone.call(number, video);
      // mettre les autres appels en pause si il en existe
      setCallSessions((prevCallSessions) => {
        const newCallSessions = { ...prevCallSessions };
        const sessionId = callSession.getId();
        // Parcourez tous les autres objets et mettez leur propriété "pause" à true
        Object.keys(newCallSessions).forEach((key) => {
          if (key !== sessionId) {
            newCallSessions[key].pause = true;
          }
        });

        return newCallSessions;
      });
      // mettre à jour callSession et callSessions
      updateCalls(callSession);
    };

    const updateCalls = (callSession) => {
      // enregistre l'appel accepté dans callSession comme appel actif
      setCallSession(callSession);
      // enregistre l'appel accepté dans callSessions comme appel disponible
      setCallSessions((prevSessions) => ({
        ...prevSessions,
        [callSession.getId()]: callSession,
      }));
    };
  };
  ```

</div>
