## configuration de l'hôte

Permet de configurer le serveur Wazo sur lequel s'authentifier.

```js
Wazo.Auth.setHost(host);
```

<div class="useless-tab-container">

- **Paramètres**

  `host`: string  
  URL ou ip de votre serveur (inclure le port si nécessaire).

- **Réponse**

  `void` :  
  Il ne retourne pas de réponse

- **Evènement**

  Il ne déclenche pas d'évènement.

- **Exemple**

  ```js
  const server = '172.0.0.1'
  Wazo.Auth.setHost(server)
  ```

</div>