## déconnecter un utilisateur

Détruit le token et refrashToken de l'utilisateur.

```js
await Wazo.Auth.logout();
```

<div class="useless-tab-container">

- **Paramètres**

  Aucun

- **Réponse**

  `void` :  
  Il ne retourne pas de réponse

- **Evènement**

  Il ne déclenche pas d'évènement.

- **Exemple**

  ```js
  const logout = async () => {
    await Wazo.Auth.logout();
    session = null;
  };
  ```

</div>
