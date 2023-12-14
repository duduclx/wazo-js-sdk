### disconnect

Déconnecte la ligne WebRtc de l'utilisateur.

```js
disconnect: () => Promise<void>;
```

```js
Wazo.Phone.disconnect();
```

<div class="useless-tab-container">

- **Paramètres**
  
  Il ne prend pas de paramètre.

- **Réponse**

  `void` :  
  Il ne retourne pas de réponse

- **Evènement**

  Il déclenche l'évènement :  
  `ON_DISCONNECTED`

- **Exemple**

  ```js
  const closeWebRtc = async () => {
    await Wazo.Phone.disconnect();
    };
  ```

</div>