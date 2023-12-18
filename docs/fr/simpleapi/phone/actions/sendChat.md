### sendChat

Permet d'envoyer un simple texte à l'interlocuteur.  
Le texte n'est pas enregistré en base, il faut donc le récupérer via l'évènement pour l'afficher au destinataire.

```js
sendChat: (content: string, sipSession?: Inviter | Invitation) => void;
```

```js
Wazo.Phone.sendChat(content);
```

<div class="useless-tab-container">

- **Paramètres**

  `content` : string  
  le texte à envoyer.  
  Cela peut être un objet, permettant ainsi de fournir plus d'informations, comme :  
  le contenu du message  
  la personne source  
  la callSession concernée  

- **Réponse**

  `void` :  
  Il ne retourne rien.

- **Evènement**

  Il déclenche l'évènement.  
  `ON_CHAT`  

- **Exemple**

  ```js
  import React, { useState } from "react";

  export const myComponent = () => {
    const [callSession, setCallSession] = useState({}); // contient l'appel actif
    const [callSessions, setCallSessions] = useState({}); // contient l'ensemble des appels (en cours et disponible)
    const [chatMessage, setChatmessage] = useState([]); // tableau contenant les messages éphémères

    const initializeWebRtc = async () => {
      // connexion à la ligne SIP
      await Wazo.Phone.connect({ audio: true, video: true });
    };

    const sendChat = (message) => {
      // stock le message
      setChatmessage(prevMessages => [...prevMessages, message])
      // envoi le message
      Wazo.Phone.sendChat(message);
    };
    
    // composant ui
    const phoneChat = () => {
      // les infos user et callSession
      /* a importer ! */
      // l'input du formulaire d'envoi de message
      const [message, setMessage] = useState("");

      // envoi d'un message avec des informations détaillées
      const onSendChat = () => {
        sendChat({
          message: message,
          user: user.profile.firstName + ' ' + user.profile.lastName,
          uuid: user.uuid,
          call: callSession.callId});
        setMessage('')
      }
    }
  };
  ```

</div>