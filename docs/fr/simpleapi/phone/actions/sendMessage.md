### sendMessage

La fonction `sendMessage` est utilisée dans les fonctions ``sendChat`` et ``sendSignal``.  
Il est donc préférable de ne pas utiliser directement ``sendMessage``.

```js
sendMessage: (body: string, sipSession?: Inviter | Invitation, contentType?: string) => void;
```