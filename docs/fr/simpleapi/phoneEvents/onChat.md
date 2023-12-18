## ON_CHAT

L'event `ON_CHAT` se déclenche lorsqu'un message texte est envoyé dans un appel (vidéo).

```js
Wazo.Phone.on(Wazo.Phone.ON_CHAT, onChat);
```

<div class="useless-tab-container">

- **Déclenchement**

  L'event `ON_CHAT` se déclenche lorsqu'un message texte est envoyé dans un appel (vidéo).

  ```js
   Wazo.Phone.sendChat(message)
  ```

  Plus d'informations sur la page [Envoyer un message](/fr/simpleapi/phone?id=envoyer-un-message)

- **Data**

  ```js
  "message" // String, contenu du message envoyé
  ```

- **Logique**

  Permet d'obtenir le message à afficher dans l'interface du destinataire.

- **Exemple**

  voici un exemple dans un projet avec React :

  ```js
  import React, { useState } from "react";

  export const myComponent = () => {
    const [callSession, setCallSession] = useState({}); // contient l'appel actif
    const [callSessions, setCallSessions] = useState({}); // contient l'ensemble des appels (en cours et disponible)
    const [chatMessage, setChatmessage] = useState([]); // tableau contenant les messages éphémères

    const initializeWebRtc = async () => {
      // connexion à la ligne SIP
      await Wazo.Phone.connect({ audio: true, video: true });
      // écoute de l'évènement ON_CHAT
      Wazo.Phone.on(Wazo.Phone.ON_CHAT, onChat);
    };

    const onChat = (message) => {
      // ajouter le message à afficher
      setChatmessage(prevMessages => [...prevMessages, message])
    };
  };
  ```

</div>
