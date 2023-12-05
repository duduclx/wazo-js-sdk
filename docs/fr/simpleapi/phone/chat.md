## Envoyer un message

Permet d'envoyer un simple texte à l'interlocuteur.  
Le texte n'est pas enregistré en base, il faut donc le récupérer via l'évènement pour l'afficher au destinataire.

```js
Wazo.Phone.sendChat(content);
```

<div class="useless-tab-container">

- **Paramètres**

  `content` : string  
  le texte à envoyer.

- **Réponse**

  `void` :  
  Il ne retourne rien.

- **Evènement**

  Il déclenche l'évènement.  
  `MESSAGE_TYPE_CHAT`  
  et un autre ??

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

    const sendChat = (message) => {
      // envoi le message
      Wazo.Phone.sendChat({content: message});
    };
  };
  ```

</div>