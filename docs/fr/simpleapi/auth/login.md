## authentifier un utilisateur

Permet d'authentifier un utilisateur et d'obtenir sa session.

> Il faut configurer le clientId pour que le refresh token soit retourné dans `Session` !

```js
const session = await Wazo.Auth.logIn(username, password, backend, tenantId);
```

<div class="useless-tab-container">

- **Paramètres**

  `username`: string  
  Le nom de l'utilisateur

  `password`: string  
  Le mot de passe de l'utilisateur

  `backend`: string (optionel)  
  A préciser si vous n'utilisez pas le backend wazo_user

  `tenantId`: string (optionel)  
  L'identifiant du tenant (uuid ou slug) lors de l'utilisation d'un backend externe (pas wazo_user)

- **Réponse**

  `session` :  
  L'objet retourné est disponible dans `Wazo.domain.Session`

  Il retourne une session qui contient l'objet suivant:

  ```json
  {
    "token": "fcd7e9fa-105e-492b-8486-aad6078d4839",
    "uuid": "3b4711bf-1227-4222-86ef-68d15b102f99",
    "tenantUuid": "958ac4de-d279-4f63-882a-b0e4f8347e56",
    "profile": {
      "id": "3b4711bf-1227-4222-86ef-68d15b102f99",
      "firstName": "prénom",
      "lastName": "nom",
      "email": "prenom.nom@mail.fr",
      "lines": [
        {
          "id": 2,
          "extensions": [
            {
              "id": 35,
              "exten": "1001",
              "context": "interne",
              "links": [
                {
                  "rel": "extensions",
                  "href": "https://10.94.101.195/api/confd/1.1/extensions/35"
                }
              ]
            }
          ],
          "endpointCustom": null,
          "endpointSccp": null,
          "endpointSip": {
            "uuid": "a9a8268a-0950-467b-8866-1d7cd2833d5e",
            "label": "t05179qh",
            "name": "t05179qh",
            "auth_section_options": [["username", "t05179qh"]],
            "links": [
              {
                "rel": "endpoint_sip",
                "href": "https://10.94.101.195/api/confd/1.1/endpoints/sip/a9a8268a-0950-467b-8866-1d7cd2833d5e"
              }
            ]
          },
          "type": "Line"
        }
      ],
      "username": null,
      "mobileNumber": "",
      "forwards": [
        {
          "destination": "1003",
          "enabled": false,
          "key": "unconditional"
        },
        {
          "destination": "999",
          "enabled": false,
          "key": "noanswer"
        },
        {
          "destination": "1002",
          "enabled": false,
          "key": "busy"
        }
      ],
      "doNotDisturb": false,
      "voicemail": {
        "id": 1,
        "name": "julien dutilleul",
        "links": [
          {
            "rel": "voicemails",
            "href": "https://10.94.101.195/api/confd/1.1/voicemails/1"
          }
        ]
      },
      "subscriptionType": 1,
      "switchboards": [],
      "agent": null,
      "status": "",
      "callPickupTargetUsers": [],
      "onlineCallRecordEnabled": false,
      "ringSeconds": 30,
      "sipLines": [
        {
          "uuid": "a9a8268a-0950-467b-8866-1d7cd2833d5e",
          "tenantUuid": "958ac4de-d279-4f63-882a-b0e4f8347e56",
          "username": "t05179qh",
          "secret": "qvgyt5p5",
          "type": "SipLine",
          "host": "",
          "endpointSectionOptions": [
            ["rtp_timeout", "7200"],
            ["allow_transfer", "yes"],
            ["use_ptime", "yes"],
            ["callerid", "\"prénom nom\" <1001>"],
            ["direct_media", "no"],
            ["dtmf_mode", "rfc4733"],
            ["language", "en_US"],
            ["inband_progress", "no"],
            ["rtp_timeout_hold", "0"],
            ["timers_sess_expires", "600"],
            ["timers_min_se", "90"],
            ["trust_id_inbound", "no"],
            ["allow_subscribe", "yes"],
            ["allow", "!all,opus,g722,alaw,ulaw,vp9,vp8,h264"],
            ["notify_early_inuse_ringing", "yes"],
            ["webrtc", "yes"],
            ["dtls_auto_generate_cert", "yes"],
            ["max_video_streams", "25"],
            ["max_audio_streams", "1"]
          ],
          "links": [
            {
              "rel": "endpoint_sip",
              "href": "https://10.94.101.195/api/confd/1.1/endpoints/sip/a9a8268a-0950-467b-8866-1d7cd2833d5e"
            }
          ],
          "trunk": null,
          "line": {
            "id": 2,
            "links": [
              {
                "rel": "lines",
                "href": "https://10.94.101.195/api/confd/1.1/lines/2"
              }
            ]
          }
        }
      ]
    },
    "expiresAt": null,
    "authorizations": [],
    "acl": [
      "confd.infos.read",
      "agentd.users.me.#",
      "auth.users.me.external.#",
      "auth.users.me.password.edit",
      "auth.users.me.sessions.*.delete",
      "auth.users.me.sessions.read",
      "auth.users.me.tokens.*.delete",
      "auth.users.me.tokens.read",
      "call-logd.users.me.cdr.read",
      "calld.lines.*.presences.read",
      "calld.switchboards.#",
      "calld.transfers.*.complete.update",
      "calld.transfers.*.delete",
      "calld.transfers.*.read",
      "calld.users.me.#",
      "calld.users.me.conferences.*.participants.read",
      "chatd.users.*.presences.read",
      "chatd.users.me.presences.update",
      "chatd.users.me.rooms.#",
      "chatd.users.presences.read",
      "confd.users.me.#.read",
      "confd.users.me.forwards.*.*",
      "confd.users.me.funckeys.*",
      "confd.users.me.funckeys.*.*",
      "confd.users.me.meetings.#",
      "confd.users.me.read",
      "confd.users.me.services.*.*",
      "confd.users.me.update",
      "dird.#.me.read",
      "dird.backends.*.sources.*.contacts.read",
      "dird.directories.*.sources.read",
      "dird.directories.favorites.#",
      "dird.directories.lookup.*.headers.read",
      "dird.directories.lookup.*.read",
      "dird.directories.personal.*.read",
      "dird.graphql.me",
      "dird.personal.#",
      "events.auth.users.me.external.#",
      "events.auth.users.me.sessions.my_session.expire_soon",
      "events.call_log.user.me.created",
      "events.calls.me",
      "events.chat.message.*.me",
      "events.chat.message.*.me.*",
      "events.chatd.users.*.presences.updated",
      "events.chatd.users.me.rooms.#",
      "events.conferences.users.me.#",
      "events.config.users.me.#",
      "events.directory.me.#",
      "events.faxes.outbound.users.me.*",
      "events.statuses.*",
      "events.switchboards.#",
      "events.transfers.me",
      "events.users.me.#",
      "webhookd.users.me.subscriptions.#",
      "websocketd",
      "agentd.#",
      "confd.#",
      "provd.#",
      "plugind.#",
      "amid.#",
      "auth.#",
      "dird.#",
      "webhookd.#",
      "websocketd",
      "call-logd.#",
      "calld.#",
      "chatd.#",
      "phoned.#",
      "events.#"
    ],
    "engineVersion": "23.16",
    "refreshToken": "a1ce8bfa-33a7-4955-b6cb-8bd165956316",
    "sessionUuid": "bee58102-52c6-49f8-9b88-f654c6941152",
    "stackUuid": "1cc60e03-8a2c-4f53-9ecc-193c0ce4b7ea",
    "_stackHostFromHeader": null,
    "server": "10.94.101.195",
    "engineUuid": "1cc60e03-8a2c-4f53-9ecc-193c0ce4b7ea"
  }
  ```

- **Evènement**

  Nom de l'évènement :

  ```bash
  ON_AUTH_FAILED: "on_auth_failed"
  ```

  Exemple :

  ```js
  Wazo.Websocket.on("on_auth_failed", callback);
  Wazo.Websocket.on(Wazo.Websocket.ON_AUTH_FAILED, callback);
  ```

- **Exemple**

  ```js
  import React, { useState, useContext, createContext } from "react";
  import Wazo from "@wazo/sdk/lib/simple";

  const myComponent = () => {
    const [user, setUser] = useState(null);
    let session = "";

    const login = async (email, password, server) => {
      // initialiser l'application
      Wazo.Auth.init("wazo-desktop", 3600);
      // configurer le serveur de destination
      Wazo.Auth.setHost(server);

      // obtenir la session de l'utilisateur
      try {
        session = await Wazo.Auth.logIn(email.trim(), password.trim());
        session.server = server;
      } catch (e) {
        // afficher le message d'erreur
      }

      // enregistre la session dans user
      setUser(session);
    };
  };

  export default myComponent
  ```

</div>
