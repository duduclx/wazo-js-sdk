### muteViaAPI

La fonction `muteViaAPI` est utilisée par défaut lorsque l'on ne spécificie pas l'argument withApi = false dans la fonction `mute`.

```js
muteViaAPI: (callSession: CallSession) => void;
```

explication:  

``Wazo.Phone.mute(callSession);`` utilisera la fonction `MuteViaApi`.  
``Wazo.Phone.mute(callSession, false);`` n'utilisera pas la fonction `MuteViaApi`, mais la méthode `mute` de `Wazo.Phone`.  
