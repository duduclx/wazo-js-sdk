## initialisation

Permet de pré-configurer l'application, avant de pouvoir connecter un utilisateur.

```js
Wazo.Auth.init(clientId, tokenExpiration, minSubscriptionType, authorizationName);
```

> Il faut configurer le clientId pour que le refresh token soit retourné dans `Session` !

<div class="useless-tab-container">

- **Paramètres**

  `clientId`: string (optionel)  
  Un identifiant de l'application, qui est obligatoire pour obtenir un refreshtoken.
  
  `tokenExpiration`: number (optionel, par defaut 3600 secondes)  
  Durée avant expiration du token (en secondes) 
  
  `minSubscriptionType`: number (optionel)  
  Defines the minimum user subscription type that allows access to your application.
  
  `authorizationName`: string (optionel)  
  Defines the name of the authorization the user should have to ba able to login.

- **Réponse**

  `void` :  
  Il ne retourne pas de réponse

- **Evènement**

  Il ne déclenche pas d'évènement.

- **Exemple**

  ```js
  // initialise l'application avec un identifiant "wazo-desktop"
  // et configure la durée du token à 3600 secondes, soit 1 heure
  Wazo.Auth.init("wazo-desktop", 3600);
  ```

</div>