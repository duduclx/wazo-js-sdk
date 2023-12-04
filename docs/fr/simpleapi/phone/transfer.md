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
  const directTransfer = (callSession, target) => {
    Wazo.Phone.transfer(callSession,target)
    setCallSessions((prevCallSessions) => {
      const newCallSessions = { ...prevCallSessions };
      delete newCallSessions[callSession.getId()];
      return newCallSessions;
    });
  }
  ```

</div>