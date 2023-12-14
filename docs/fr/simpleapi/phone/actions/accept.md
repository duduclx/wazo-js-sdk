### accept

Décroche l'appel entrant de l'utilisateur.

```js
accept: (callSession: CallSession, cameraEnabled?: boolean): Promise<string | null>
```

```js
Wazo.Phone.accept(callSession, withVideo);
```

<div class="useless-tab-container">

- **Paramètres**

  `callSession` : objet CallSession  
  Il est possible de configurer les contraintes des media, dans `rawOptions.media`.

  `withVideo` : boolean (optionnel, false par défaut)  
  Il est possible de renseigner si il s'agit d'un appel audio ou vidéo.  
  la valeur par défaut est: `false`

- **Réponse**

  `void` :  
  Il ne retourne pas de réponse

- **Evènement**

  Il  déclenche l'évènement.  
  [`ON_CALL_ACCEPTED`](fr/simpleapi/phoneEvents?id=on_call_accepted)

- **Exemple**

  ```js
  import React, { useState } from "react";

  export const myComponent = () => {
    const [incomingCall, setIncomingCall] = useState(false); // affiche l'appel entrant si true
    const [callSession, setCallSession] = useState({}); // contient l'appel actif
    const [callSessions, setCallSessions] = useState({}); // contient l'ensemble des appels (en cours et disponible)

    const initializeWebRtc = async () => {
      // connexion à la ligne SIP
      await Wazo.Phone.connect({ audio: true, video: true });
    };

    const acceptIncomingCall = (callSession, withVideo) => {
      // cacher le pop up d'appel entrant
      setIncomingCall(false);
      // accepter l'appel
      Wazo.Phone.accept(callSession, withVideo);
      // enregistre l'appel accepté dans callSessions comme appel disponible
      setCallSessions((prevCallSessions) => {
        const newCallSessions = { ...prevCallSessions };
        const sessionId = callSession.getId(); // obtenir l'Id d el'appel et s'en servir comme clé
        // Parcourez tous les autres objets et mettez leur propriété "pause" à true
        Object.keys(newCallSessions).forEach((key) => {
          if (key !== sessionId) {
            newCallSessions[key].pause = true;
          }
        });

        return {
          ...prevCallSessions,
          [sessionId]: callSession,
        };
      });

      // enregistre l'appel accepté dans callSession comme appel actif
      setCallSession(callSession);
    };
  };
  ```

  </div>
