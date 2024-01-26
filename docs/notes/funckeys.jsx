const responseObject = {
    "id": 2,
    "name": null,
    "keys": {
      "1": {
        "id": 23,
        "inherited": false,
        "blf": true,
        "label": "julien",
        "destination": {
          "user_id": 1,
          "href": "https://10.94.101.195/api/confd/1.1/users/1",
          "type": "user",
          "user_firstname": "julien",
          "user_lastname": "dutilleul"
        }
      },
      "2": {
        "id": 24,
        "inherited": false,
        "blf": false,
        "label": null,
        "destination": {
          "queue_id": 2,
          "href": null,
          "type": "queue"
        }
      },
      "3": {
        "id": 25,
        "inherited": false,
        "blf": false,
        "label": "renvoi non réponse",
        "destination": {
          "href": null,
          "exten": "1001",
          "type": "forward",
          "forward": "noanswer"
        }
      }
    }
  }