## Rejeter un appel

Il est possible de rejeter un appel entrant, cela évite de laisser sonner alors que l'on ne souhaite pas décrocher.

```js
Wazo.Phone.reject(callSession);
```


<div class="useless-tab-container">

- **Paramètres**

  `callSession` : objet CallSession  
  correspond à l'appel reçu.

- **Réponse**

  `void` :  
  Il ne retourne pas de réponse.

- **Evènement**

  Il déclenche l'évènement:  
  [`ON_CALL_REJECTED`](fr/simpleapi/phoneEvents/onCallRejected.md)

  Il déclenche aussi un WebSocket qui sera joué à l'appelant et à l'appelé :  
  CALL_ENDED: "call_ended"

- **Exemple**

  ```js
  const rejectIncomingCall = callSession => {
    // hide incommingCall box
    setIncomingCall(false);
    // reject call
    Wazo.Phone.reject(callSession);
  };
  ```

</div>