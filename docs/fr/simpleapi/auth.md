# authentification

## initialisation

```js
Wazo.Auth.init(clientId, tokenExpiration, minSubscriptionType, authorizationName);
```

<!-- tabs:start -->

#### **Paramètres**

- `clientId`: string (optionel)
  - Un identifiant de l'application, qui est obligatoire pour obtenir un refreshtoken
  
- `tokenExpiration`: number (optionel, par defaut 3600 secondes)
  - Durée avant expiration du token (en secondes) 
  
- `minSubscriptionType`: number (optionel)
  - Defines the minimum user subscription type that allows access to your application.
  
- `authorizationName`: string (optional)
  - Defines the name of the authorization the user should have to ba able to login.

#### **Réponse**

Bonjour!

#### **Evènement**

Ciao!

<!-- tabs:end -->

## configuration de l'hôte

```js
Wazo.Auth.setHost(host);
```

<!-- tabs:start -->

#### **Paramètres**

- `host`: string
  - URL ou ip de votre serveur (inclure le port si nécessaire).

#### **Réponse**

Bonjour!

#### **Evènement**

Ciao!

<!-- tabs:end -->