## react context to use directly in your projet

dependances

dev:
npm install react --save-dev

package.json
{
  "name": "votre-package",
  "version": "1.0.0",
  "peerDependencies": {
    "react": "^16.8.0"
  }
}


## installation

just install the Wzo-sdk

## use

import {appProvider} from "@Wazo/react"

Wrap your application with he provider

<AppProvider>
  <youApp>
</AppProvider>

in your file

import {useApp} from "@wazo/react"

const {room} = useApp();