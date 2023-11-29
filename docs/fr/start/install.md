# Installation

## Installation dans un projet

Vous pouvez l'installer avec une de des commandes suivantes, à votre préférence :
```bash
npm install @wazo/sdk
```
ou
```bash
yarn add @wazo/sdk
```

Dans votre projet Node ou tierce, vous pouvez l'importer avec :
```js
import Wazo from '@wazo/sdk/lib/simple';
```

Dans un projet javascript & html, vous pouvez l'importer avec :
```js
const { Wazo } = window['@wazo/sdk'];
```

## Content Delivery Networks

Il est possible de charger le SDK depuis un CDN.

UNPKG
```html
<script src="https://unpkg.com/@wazo/sdk/dist/wazo-sdk.js"></script>
```

JsDelivr
```html
<script src="https://cdn.jsdelivr.net/npm/@wazo/sdk"></script>
```