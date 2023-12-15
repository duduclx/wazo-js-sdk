### startConference (adhoc)

Permet de fusionner plusieurs appels en un appel unique.  
Il sera nécessaire d'avoir les informations de l'appel dans `callSession.call`.  
Pour cela, il faudra obligatoirement utiliser l'évènement `Wazo.websocket.on('call_updated', onCallUpdated)` afin d'obtenir les informations requises.

```js
startConference: (host: CallSession, otherCalls: CallSession[]) => Promise<AdHocAPIConference>;
```

```js
adHocConference = await Wazo.Phone.startConference(callSession, participants);
```

<div class="useless-tab-container">

- **Paramètres**

  `callSession` : objet CallSession  
  correspond à l'appel en cours.

  `participants` : array  
  tableau ocntenant les Id des appels à ajouter à la conférence.

- **Réponse**

  `adHocConference ` :  
  Il retourne la conférence, avec les informations et les fonctions utiles.

- **Evènement**

  Il ne déclenche pas d'évènement.

- **Exemple**

  ```js
  import React, { useState } from "react";

  export const myComponent = () => {
    const [callSession, setCallSession] = useState({}); // contient l'appel actif
    const [callSessions, setCallSessions] = useState({}); // contient l'ensemble des appels (en cours et disponible)
    const [conference, setConference] = useState(null); // contient la conférence

    const initializeWebRtc = async () => {
      // connexion à la ligne SIP
      await Wazo.Phone.connect({ audio: true, video: true });
    };

    const startConference = async (participants) => {
      let adHocConference;
      // si seulement 2 appels en cours
      if (Object.keys(callSessions).length === 2) {
        // récupère le 2ème appel
        let autreObjet = Object.values(callSessions).find(
          (objet) => objet !== callSessions[callSession.getId()]
        );
        // ajoute le participant du 2ème appel
        adHocConference = await Wazo.Phone.startConference(callSession, [
          autreObjet,
        ]);
      } else {
        // si plus de 2 appels en cours
        adHocConference = await Wazo.Phone.startConference(
          callSession,
          participants
        );
      }
      if (adHocConference) {
        setCallSession(adHocConference.host);
        setConference(adHocConference);
      }
    };
  };
  ```

</div>

#### addParticipant (adhoc)

Permet d'ajouter un intervenant à partir d'un appel en cours.  
Il sera nécessaire d'avoir les informations de l'appel dans `callSession.call`.  
Pour cela, il faudra obligatoirement utiliser l'évènement `Wazo.websocket.on('call_updated', onCallUpdated)` afin d'obtenir les informations requises.

```js
adHocConference.addParticipant(participant);
```

<div class="useless-tab-container">

- **Paramètres**

  `callSession` : objet CallSession  
  correspond à l'appel en cours à ajouter.

- **Réponse**

  `adHocConference ` :  
  Il retourne la conférence, avec les informations et les fonctions utiles.

- **Evènement**

  Il ne déclenche pas d'évènement.

- **Exemple**

  ```js
  import React, { useState } from "react";

  export const myComponent = () => {
    const [callSession, setCallSession] = useState({}); // contient l'appel actif
    const [callSessions, setCallSessions] = useState({}); // contient l'ensemble des appels (en cours et disponible)
    const [conference, setConference] = useState(null); // contient la conférence

    const initializeWebRtc = async () => {
      // connexion à la ligne SIP
      await Wazo.Phone.connect({ audio: true, video: true });
    };

    const addParticipant = async (callSession) => {
      // ajout de l'appel en cours à la conférence
      conference.addParticipant(callSession);
    };
  };
  ```

</div>


#### RemoveParticipant (adhoc)

Permet de quitter la conférence sans mettre fin à la conférence.  
Il sera nécessaire d'avoir les informations de l'appel dans `callSession.call`.  
Pour cela, il faudra obligatoirement utiliser l'évènement `Wazo.websocket.on('call_updated', onCallUpdated)` afin d'obtenir les informations requises.

```js
adHocConference.removeParticipant(callSession);
```

<div class="useless-tab-container">

- **Paramètres**

  `callSession` : objet CallSession  
  correspond à l'appel en cours à retirer.

- **Réponse**

  `adHocConference ` :  
  Il retourne la conférence, avec les informations et les fonctions utiles.

- **Evènement**

  Il déclenche le websocket.  
  CONFERENCE_ADHOC_PARTICIPANT_LEFT: "conference_adhoc_participant_left"

- **Exemple**

  ```js
  import React, { useState } from "react";

  export const myComponent = () => {
    const [callSession, setCallSession] = useState({}); // contient l'appel actif
    const [callSessions, setCallSessions] = useState({}); // contient l'ensemble des appels (en cours et disponible)
    const [conference, setConference] = useState(null); // contient la conférence

    const initializeWebRtc = async () => {
      // connexion à la ligne SIP
      await Wazo.Phone.connect({ audio: true, video: true });
    };

    const removeParticipant = async (callSession) => {
      // retire l'appel de la conférence
      conference.removeParticipant(callSession);
    };
  };
  ```

</div>

#### hangup (adhoc)

Met fin à la conférence pour l'ensemble des participants.  
Il sera nécessaire d'avoir les informations de l'appel dans `callSession.call`.  
Pour cela, il faudra obligatoirement utiliser l'évènement `Wazo.websocket.on('call_updated', onCallUpdated)` afin d'obtenir les informations requises.

```js
adHocConference.hangup();
```

<div class="useless-tab-container">

- **Paramètres**

  aucun.

- **Réponse**

  `adHocConference ` :  
  Il retourne la conférence, avec les informations et les fonctions utiles.  
  Notemment avec les valeurs:
  ```json
  {
    ...adhocConference,
    "finished": true,
    "participant": [],
  }
  ```

- **Evènement**

  Il déclenche le websocket.  
  CONFERENCE_ADHOC_DELETED: "conference_adhoc_deleted"

- **Exemple**

  ```js
  import React, { useState } from "react";

  export const myComponent = () => {
    const [callSession, setCallSession] = useState({}); // contient l'appel actif
    const [callSessions, setCallSessions] = useState({}); // contient l'ensemble des appels (en cours et disponible)
    const [conference, setConference] = useState(null); // contient la conférence

    const initializeWebRtc = async () => {
      // connexion à la ligne SIP
      await Wazo.Phone.connect({ audio: true, video: true });
    };

    const removeParticipant = () => {
      // retire l'appel de la conférence
      conference.hangup();
    };
  };
  ```

</div>