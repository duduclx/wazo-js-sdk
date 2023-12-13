## ON_MESSAGE

L'event `ON_MESSAGE` se déclenche lorsqu'un message passe par le bus de l'application.

```js
Wazo.Phone.on(Wazo.Phone.ON_MESSAGE, onMessage);
```

<div class="useless-tab-container">

- **Déclenchement**

  L'event `ON_MESSAGE` se déclenche lorsqu'un message passe par le bus de l'application.

- **Data**

  ```js
  {
  "headers": {
    "Via": [
      {
        "raw": "SIP/2.0/WSS 192.0.2.251;rport=33746;received=127.0.0.1;branch=z9hG4bK3003458",
        "parsed": {
          "protocol": "SIP",
          "transport": "WSS",
          "host_type": "IPv4",
          "host": "192.0.2.251",
          "rport": "33746",
          "received": "127.0.0.1",
          "branch": "z9hG4bK3003458"
        }
      }
    ],
    "Call-ID": [
      {
        "raw": "rsldg8nljqn7gf32rege",
        "parsed": "rsldg8nljqn7gf32rege"
      }
    ],
    "From": [
      {
        "raw": "\"prénom nom\" <sip:t05179qh@10.94.101.195>;tag=gp71e08s16",
        "parsed": {
          "parameters": {
            "tag": "gp71e08s16"
          },
          "uri": {
            "parameters": {},
            "headers": {},
            "raw": {
              "scheme": "sip",
              "user": "t05179qh",
              "host": "10.94.101.195"
            },
            "normal": {
              "scheme": "sip",
              "user": "t05179qh",
              "host": "10.94.101.195"
            }
          },
          "_displayName": "prénom nom"
        }
      }
    ],
    "To": [
      {
        "raw": "<sip:1005@10.94.101.195>;tag=794bed7c-72ea-45de-8780-68f6e9425b45",
        "parsed": {
          "parameters": {
            "tag": "794bed7c-72ea-45de-8780-68f6e9425b45"
          },
          "uri": {
            "parameters": {},
            "headers": {},
            "raw": {
              "scheme": "sip",
              "user": "1005",
              "host": "10.94.101.195"
            },
            "normal": {
              "scheme": "sip",
              "user": "1005",
              "host": "10.94.101.195"
            }
          }
        }
      }
    ],
    "CSeq": [
      {
        "raw": "2 INVITE",
        "parsed": {
          "value": 2,
          "method": "INVITE"
        }
      }
    ],
    "Server": [
      {
        "raw": "Wazo PBX"
      }
    ],
    "Allow": [
      {
        "raw": "OPTIONS, REGISTER, SUBSCRIBE, NOTIFY, PUBLISH, INVITE, ACK, BYE, CANCEL, UPDATE, PRACK, REFER, MESSAGE"
      }
    ],
    "Contact": [
      {
        "raw": "<sip:127.0.0.1:5039;transport=ws>",
        "parsed": {
          "parameters": {},
          "uri": {
            "parameters": {
              "transport": "ws"
            },
            "headers": {},
            "raw": {
              "scheme": "sip",
              "host": "127.0.0.1",
              "port": 5039
            },
            "normal": {
              "scheme": "sip",
              "host": "127.0.0.1",
              "port": 5039
            }
          }
        }
      }
    ],
    "Supported": [
      {
        "raw": "100rel, timer, replaces, norefersub"
      }
    ],
    "Content-Type": [
      {
        "raw": "application/sdp",
        "parsed": "application/sdp"
      }
    ],
    "Content-Length": [
      {
        "raw": "1789",
        "parsed": 1789
      }
    ]
  },
  "statusCode": 200,
  "reasonPhrase": "OK",
  "data": "SIP/2.0 200 OK\r\nVia: SIP/2.0/WSS 192.0.2.251;rport=33746;received=127.0.0.1;branch=z9hG4bK3003458\r\nCall-ID: rsldg8nljqn7gf32rege\r\nFrom: \"julien dutilleul\" <sip:t05179qh@10.94.101.195>;tag=gp71e08s16\r\nTo: <sip:1005@10.94.101.195>;tag=794bed7c-72ea-45de-8780-68f6e9425b45\r\nCSeq: 2 INVITE\r\nServer: Wazo PBX\r\nAllow: OPTIONS, REGISTER, SUBSCRIBE, NOTIFY, PUBLISH, INVITE, ACK, BYE, CANCEL, UPDATE, PRACK, REFER, MESSAGE\r\nContact: <sip:127.0.0.1:5039;transport=ws>\r\nSupported: 100rel, timer, replaces, norefersub\r\nContent-Type: application/sdp\r\nContent-Length:  1789\r\n\r\nv=0\r\no=- 89726186 2 IN IP4 10.94.101.195\r\ns=Asterisk\r\nc=IN IP4 10.94.101.195\r\nt=0 0\r\na=msid-semantic:WMS *\r\na=group:BUNDLE 0 1\r\nm=audio 10034 UDP/TLS/RTP/SAVPF 109 9 8 0 101\r\na=connection:new\r\na=setup:active\r\na=fingerprint:SHA-256 0C:FA:0A:CB:37:C7:8F:89:C3:F0:F4:A6:0B:03:92:77:1B:8C:EA:E8:EC:4F:AB:03:B0:E3:15:A8:30:12:68:7A\r\na=ice-ufrag:15979cce462639c735a808ff5c8e2993\r\na=ice-pwd:122fac376048ed0c2ade1ae84950e6a1\r\na=candidate:Ha5e65c3 1 UDP 2130706431 10.94.101.195 10034 typ host\r\na=rtpmap:109 opus/48000/2\r\na=fmtp:109 useinbandfec=1\r\na=rtpmap:9 G722/8000\r\na=rtpmap:8 PCMA/8000\r\na=rtpmap:0 PCMU/8000\r\na=rtpmap:101 telephone-event/8000\r\na=fmtp:101 0-16\r\na=ptime:20\r\na=maxptime:20\r\na=sendrecv\r\na=rtcp-mux\r\na=ssrc:1612790368 cname:01e1e453-5c54-4dd1-9282-245f7730ce7c\r\na=msid:564e06b5-f430-4c1e-b22f-89ed46e09337 55442151-7c3f-45ed-b957-d11123197b6e\r\na=rtcp-fb:* transport-cc\r\na=mid:0\r\nm=video 10034 UDP/TLS/RTP/SAVPF 121 120 126\r\na=connection:new\r\na=setup:active\r\na=fingerprint:SHA-256 0C:FA:0A:CB:37:C7:8F:89:C3:F0:F4:A6:0B:03:92:77:1B:8C:EA:E8:EC:4F:AB:03:B0:E3:15:A8:30:12:68:7A\r\na=ice-ufrag:15979cce462639c735a808ff5c8e2993\r\na=ice-pwd:122fac376048ed0c2ade1ae84950e6a1\r\na=rtpmap:121 VP9/90000\r\na=rtpmap:120 VP8/90000\r\na=fmtp:120 max-fr=60;max-fs=12288\r\na=rtpmap:126 H264/90000\r\na=fmtp:126 packetization-mode=1;level-asymmetry-allowed=1;profile-level-id=42E01F\r\na=sendrecv\r\na=rtcp-mux\r\na=ssrc:1511875186 cname:8dccfe78-16e8-42db-8997-5a93a98b547d\r\na=msid:564e06b5-f430-4c1e-b22f-89ed46e09337 a0d2def0-91df-4940-b047-0b649562f830\r\na=rtcp-fb:* transport-cc\r\na=rtcp-fb:* ccm fir\r\na=rtcp-fb:* goog-remb\r\na=rtcp-fb:* nack\r\na=extmap:4 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time\r\na=extmap:7 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01\r\na=mid:1\r\n",
  "via": {
    "protocol": "SIP",
    "transport": "WSS",
    "host_type": "IPv4",
    "host": "192.0.2.251",
    "rport": "33746",
    "received": "127.0.0.1",
    "branch": "z9hG4bK3003458"
  },
  "viaBranch": "z9hG4bK3003458",
  "callId": "rsldg8nljqn7gf32rege",
  "from": {
    "parameters": {
      "tag": "gp71e08s16"
    },
    "uri": {
      "parameters": {},
      "headers": {},
      "raw": {
        "scheme": "sip",
        "user": "t05179qh",
        "host": "10.94.101.195"
      },
      "normal": {
        "scheme": "sip",
        "user": "t05179qh",
        "host": "10.94.101.195"
      }
    },
    "_displayName": "prénom nom"
  },
  "fromTag": "gp71e08s16",
  "to": {
    "parameters": {
      "tag": "794bed7c-72ea-45de-8780-68f6e9425b45"
    },
    "uri": {
      "parameters": {},
      "headers": {},
      "raw": {
        "scheme": "sip",
        "user": "1005",
        "host": "10.94.101.195"
      },
      "normal": {
        "scheme": "sip",
        "user": "1005",
        "host": "10.94.101.195"
      }
    }
  },
  "toTag": "794bed7c-72ea-45de-8780-68f6e9425b45",
  "cseq": 2,
  "method": "INVITE",
  "body": "v=0\r\no=- 89726186 2 IN IP4 10.94.101.195\r\ns=Asterisk\r\nc=IN IP4 10.94.101.195\r\nt=0 0\r\na=msid-semantic:WMS *\r\na=group:BUNDLE 0 1\r\nm=audio 10034 UDP/TLS/RTP/SAVPF 109 9 8 0 101\r\na=connection:new\r\na=setup:active\r\na=fingerprint:SHA-256 0C:FA:0A:CB:37:C7:8F:89:C3:F0:F4:A6:0B:03:92:77:1B:8C:EA:E8:EC:4F:AB:03:B0:E3:15:A8:30:12:68:7A\r\na=ice-ufrag:15979cce462639c735a808ff5c8e2993\r\na=ice-pwd:122fac376048ed0c2ade1ae84950e6a1\r\na=candidate:Ha5e65c3 1 UDP 2130706431 10.94.101.195 10034 typ host\r\na=rtpmap:109 opus/48000/2\r\na=fmtp:109 useinbandfec=1\r\na=rtpmap:9 G722/8000\r\na=rtpmap:8 PCMA/8000\r\na=rtpmap:0 PCMU/8000\r\na=rtpmap:101 telephone-event/8000\r\na=fmtp:101 0-16\r\na=ptime:20\r\na=maxptime:20\r\na=sendrecv\r\na=rtcp-mux\r\na=ssrc:1612790368 cname:01e1e453-5c54-4dd1-9282-245f7730ce7c\r\na=msid:564e06b5-f430-4c1e-b22f-89ed46e09337 55442151-7c3f-45ed-b957-d11123197b6e\r\na=rtcp-fb:* transport-cc\r\na=mid:0\r\nm=video 10034 UDP/TLS/RTP/SAVPF 121 120 126\r\na=connection:new\r\na=setup:active\r\na=fingerprint:SHA-256 0C:FA:0A:CB:37:C7:8F:89:C3:F0:F4:A6:0B:03:92:77:1B:8C:EA:E8:EC:4F:AB:03:B0:E3:15:A8:30:12:68:7A\r\na=ice-ufrag:15979cce462639c735a808ff5c8e2993\r\na=ice-pwd:122fac376048ed0c2ade1ae84950e6a1\r\na=rtpmap:121 VP9/90000\r\na=rtpmap:120 VP8/90000\r\na=fmtp:120 max-fr=60;max-fs=12288\r\na=rtpmap:126 H264/90000\r\na=fmtp:126 packetization-mode=1;level-asymmetry-allowed=1;profile-level-id=42E01F\r\na=sendrecv\r\na=rtcp-mux\r\na=ssrc:1511875186 cname:8dccfe78-16e8-42db-8997-5a93a98b547d\r\na=msid:564e06b5-f430-4c1e-b22f-89ed46e09337 a0d2def0-91df-4940-b047-0b649562f830\r\na=rtcp-fb:* transport-cc\r\na=rtcp-fb:* ccm fir\r\na=rtcp-fb:* goog-remb\r\na=rtcp-fb:* nack\r\na=extmap:4 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time\r\na=extmap:7 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01\r\na=mid:1\r\n"
  }
  ```

- **Logique**

  Permet d'obtenir les informations qui transitent via le serveur.

- **Exemple**

  voici un exemple dans un projet avec React :

  ```js
  import React, { useState } from "react";

  export const myComponent = () => {
    const [callSession, setCallSession] = useState({}); // contient l'appel actif
    const [callSessions, setCallSessions] = useState({}); // contient l'ensemble des appels (en cours et disponible)

    const initializeWebRtc = async () => {
      // connexion à la ligne SIP
      await Wazo.Phone.connect({ audio: true, video: true });
      // écoute de l'évènement ON_MESSAGE
      Wazo.Phone.on(Wazo.Phone.ON_MESSAGE, onMessage);
    };

    const onMessage = () => {
      // actions
    };
  };
  ```

</div>
