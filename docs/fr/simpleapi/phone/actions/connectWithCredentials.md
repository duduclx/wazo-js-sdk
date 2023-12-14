### connectWithCredentials

La fonction `connectWithCredentials` est utilisé au sein même de la fonction `connect`.  
Il est donc préférable d'utiliser la fonction `connect`.

```js
connectWithCredentials: (server: string, sipLine: SipLine, displayName: string, rawOptions: Partial<ConnectionOptions>) => void;
```