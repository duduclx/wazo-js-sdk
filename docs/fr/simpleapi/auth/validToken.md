## valider le token de l'utilisateur



```js
const session = await Wazo.Auth.validateToken(token, refreshToken);
```

<div class="useless-tab-container">

- **Paramètres**

  `token`: string  
  le token de l'utilisateur a valider (eg: vérifie que le token est valide et non expiré).
  
  `refreshToken`: string (optionel)  
  le refresh token de l'utilisateur, utilisé pour générer un nouveau token si le token est expiré.

- **Réponse**

  `Wazo.domain.Session` :  
  Il retourne l'objet `session` de l'utilisateur

- **Evènement**

  Il ne déclenche pas d'évènement.

- **Exemple**

  ```js
  const session = await Wazo.Auth.validateToken(token, refreshToken);
  ```

</div>