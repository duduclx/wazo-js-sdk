## ON_SIGNAL

L'event `ON_SIGNAL` se déclenche lorsqu'un signal est envoyé dans un appel (vidéo).

```js
Wazo.Phone.on(Wazo.Phone.ON_SIGNAL, onSignal);
```

<div class="useless-tab-container">

- **Déclenchement**

  L'event `ON_SIGNAL` se déclenche lorsqu'un signal est envoyé dans un appel (vidéo).

  ```js
   Wazo.Phone.sendSignal(signal)
  ```

  Plus d'informations sur la page [Envoyer un signal](/fr/simpleapi/phone?id=envoyer-un-signal)

- **Data**

  ```js
  "signal" // String, contenu du message envoyé
  ```

- **Logique**

  Permet d'obtenir l'information qu'un signal à été envoyé.  
  Cela peut-être utilisé en complément de `sendchat`, mais pour déclencher une action, comme `lever la main`.

- **Exemple**

  voici un exemple dans un projet avec React :

  ```js
  import React, { useState } from "react";

  export const myComponent = () => {
    const [callSession, setCallSession] = useState({}); // contient l'appel actif
    const [callSessions, setCallSessions] = useState({}); // contient l'ensemble des appels (en cours et disponible)
    const [signal, setSignal] = useState(null); // le signal

    const initializeWebRtc = async () => {
      // connexion à la ligne SIP
      await Wazo.Phone.connect({ audio: true, video: true });
      // écoute de l'évènement ON_SIGNAL
      Wazo.Phone.on(Wazo.Phone.ON_SIGNAL, onSignal);
    };

    const onSignal = (signal) => {
      // ajouter le signal à afficher
      setSignal(signal);
    };
  };
  ```

</div>
