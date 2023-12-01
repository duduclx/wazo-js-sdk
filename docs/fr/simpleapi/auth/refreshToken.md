## configurer un callback lorsque le token est renouvelé

Quand le token de l'utilisateur va bientôt expirer, le SDK de Wazo déclenche un callback.  
Vous pouvez donc me mettre à jour dans votre application.  
Par exemple, l'enregistrer dans le localStorage ou les cookies.

> Il faut configurer le clientId pour que le refresh token soit retourné dans `Session` !

```js
Wazo.Auth.setOnRefreshToken(token => { /* Do something with the new token */ });
```

<div class="useless-tab-container">

- **Paramètres**

  `callback`: Function (token: string)  
  Une fonction appelée lorsque le token de l'utilisateur va bientôt expirer.

- **Réponse**

  `Wazo.domain.Session` :  
  Il retourne l'objet `session` de l'utilisateur

- **Evènement**

  Il ne déclenche pas d'évènement.

- **Exemple**

  ```js
  Wazo.Auth.setOnRefreshToken((token) => {
      setUser({ token });
    });
  ```

</div>