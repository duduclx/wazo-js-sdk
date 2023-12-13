# Agentd

**`Misc`**

Use Agentd to handle agent states

Legacy (all versions)
```js
Wazo.agentd.getAgent(agentNumber);
Wazo.agentd.login(agentNumber, context, extension);
Wazo.agentd.logout(agentNumber);
Wazo.agentd.pause(agentNumber);
Wazo.agentd.resume(agentNumber);
```
Log in with line ID only (engine version > 20.11 -- recommended)
```js
Wazo.agentd.loginWithLineId(lineId);
```
No-args methods (engine version >= 20.17 -- recommended)
```js
Wazo.agentd.getStatus();
Wazo.agentd.staticLogout();
Wazo.agentd.staticPause();
Wazo.agentd.staticResume();
```