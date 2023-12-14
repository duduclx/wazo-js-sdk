### unmuteViaAPI

La fonction `unmuteViaAPI` est utilisée par défaut lorsque l'on ne spécificie pas l'argument withApi = false dans la fonction `unmute`.

```js
muteViaAPI: (callSession: CallSession) => void;
```

explication:  

``Wazo.Phone.unmute(callSession);`` utilisera la fonction `unmuteViaAPI`.  
``Wazo.Phone.unmute(callSession, false);`` n'utilisera pas la fonction `unmuteViaAPI`, mais la méthode `unmute` de `Wazo.Phone`.  
