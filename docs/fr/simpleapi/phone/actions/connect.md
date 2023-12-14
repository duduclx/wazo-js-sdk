### connect

Connecte la ligne WebRtc de l'utilisateur et rend les appels possibles.

```js
connect: (options: Partial<ConnectionOptions>, sipLine?: SipLine | null | undefined) => Promise<void>;
```

```js
Wazo.Phone.connect(rawOptions, sipLine);
```

<div class="useless-tab-container">

- **Paramètres**
  
  `rawOptions` : (optionel)    
  Il est possible de configurer les contraintes au niveau du son et de vidéo du navigateur de l'utilisateur.  
  Plus d'informations sur [getUserMedia](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia)
  ```js
  {
    audio: boolean,
    video: boolean
  }
  ```

  `sipLine` : (optionel)  
  Il est possible de renseigner une ligne Sip si elle n'existe pas dans la `Session`.

- **Réponse**

  `void` :  
  Il ne retourne pas de réponse

- **Evènement**

  Il ne déclenche pas d'évènement.

- **Exemple**

  ```js
  const initializeWebRtc = async () => {
    await Wazo.Phone.connect({ audio: true, video: true });
    };
  ```

</div>