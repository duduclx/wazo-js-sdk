### atxfer

Le transfère d'appel indirect permet d'appeler une personne tierce durant l'appel et de réaliser ou annuler le transfert si besoin.

Il faudra stocker le transfert afin de le confirmer ou l'annuler.

```js
atxfer: (callSession: CallSession) => Record<string, any> | null;
```

```js
const currentAtxfer = Wazo.Phone.atxfer(callSession);
```

<div class="useless-tab-container">

- **Paramètres**

  `callSession` : objet CallSession  
  correspond à l'appel reçu.

  `target` : string  
  correspond au numéro de téléphone à qui transférer l'appel.

- **Réponse**

  `currentAtxfer` :  
  Il retourne un objet contenant des fonctions afin de gérer le transfert en cours.

  ```js
  {
    cancel();
    complete();
    init();
    newSession: {} // objet qui détient les informations de la session Sip de l'appel
  }
  ```

- **Evènement**

  Il déclenche l'évènement:  
  [`ON_CALL_INCOMING`](fr/simpleapi/phoneEvents?id=on_call_incoming)  
  [``ON_CALL_ENDED``](fr/simpleapi/phoneEvents?id=on_call_ended)

- **Exemple**

  ```js
  import React, { useState } from "react";

  export const myComponent = () => {
    const [callSession, setCallSession] = useState({}); // contient l'appel actif
    const [callSessions, setCallSessions] = useState({}); // contient l'ensemble des appels (en cours et disponible)
    const [target, setTarget] = useState(""); // le numéro cible du transfert d'appel
    const [currentAtxfer, setCurrentAtxfer] = useState({}); // le transfert d'appel
    const [openAtxFer, setOpenAtxFer] = useState(false); // la vue pour renseigner le transfert (bouton annuler confirmer)

    const initializeWebRtc = async () => {
      // connexion à la ligne SIP
      await Wazo.Phone.connect({ audio: true, video: true });
    };

    const indirectTransfer = (callSession) => {
    const currentAtxfer = Wazo.Phone.atxfer(callSession)
    return currentAtxfer;
  }

    const indirectTransferEnd = () => {
        // met à jour callSession et callSessions
        setCallSessions((prevCallSessions) => {
        const newCallSessions = { ...prevCallSessions };
        delete newCallSessions[callSession.getId()];
        return newCallSessions;
        });
        setCallSession({});
    }

    const onAtxfer = (callSession, target) => {
      const Atxfer = indirectTransfer(callSession);
      Atxfer.init(target);
      setOpenAtxFer(true);
      setCurrentAtxfer(Atxfer);
    };

    const cancelAtxfer = () => {
      currentAtxfer.cancel();
      setCurrentAtxfer(null);
      setOpenAtxFer(false);
      onClose();
    };

    const completeAtxfer = () => {
      currentAtxfer.complete();
      indirectTransferEnd(callSession);
      setCurrentAtxfer(null);
      setOpenAtxFer(false);
      onClose();
    };
  };
  ```

</div>
