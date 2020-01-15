/* eslint-disable dot-notation */
/* @flow */

import WazoApiClient from '../api-client';

global.wazoClients = {};

// Can't use node cache mechanism here because when requiring lib/CallApi.js
// this file will be merge with CallApi.js and the cache will be lost.
// So we have to tore values in global scope.
global.wazoClientId = {};
global.wazoClientToken = {};
global.wazoRefreshToken = {};
global.wazoOnRefreshToken = {};
global.wazoRefreshExpiration = {};
global.wazoRefreshBackend = {};

export const setApiClientId = (clientId: string, forServer: ?string = null) => {
  global.wazoClientId[forServer] = clientId;
};

export const setCurrentServer = (newServer: string) => {
  global.wazoCurrentServer = newServer;
};

export const setApiToken = (newToken: string, forServer: ?string = null) => {
  global.wazoClientToken[forServer] = newToken;
};

export const setRefreshToken = (newRefreshToken: string, forServer: ?string = null) => {
  global.wazoRefreshToken[forServer] = newRefreshToken;
};

export const setOnRefreshToken = (onRefreshToken: Function, forServer: ?string = null) => {
  global.wazoOnRefreshToken[forServer] = onRefreshToken;
};

export const setRefreshExpiration = (refreshExpiration: number, forServer: ?string = null) => {
  global.wazoRefreshExpiration[forServer] = refreshExpiration;
};

export const setRefreshBackend = (refreshBackend: number, forServer: ?string = null) => {
  global.wazoRefreshBackend[forServer] = refreshBackend;
};

const fillClient = (apiClient: WazoApiClient) => {
  const { server, token, clientId } = apiClient.client;

  //  try with null server when dealing with non-related server info
  apiClient.setToken(global.wazoClientToken[server] || global.wazoClientToken[null] || token);

  apiClient.setClientId(global.wazoClientId[server] || global.wazoClientId[null] || clientId);

  apiClient.setRefreshToken(global.wazoRefreshToken[server] || global.wazoRefreshToken[null] || apiClient.refreshToken);

  apiClient.setOnRefreshToken(global.wazoOnRefreshToken[server] || global.wazoOnRefreshToken[null]
    || apiClient.onRefreshToken);

  apiClient.setRefreshExpiration(global.wazoRefreshExpiration[server] || global.wazoRefreshExpiration[null]
    || apiClient.refreshExpiration);

  apiClient.setRefreshBackend(global.wazoRefreshBackend[server] || global.wazoRefreshBackend[null]
    || apiClient.refreshBackend);

  return apiClient;
};

export default (forServer: ?string): WazoApiClient => {
  const server: string = forServer || global.wazoCurrentServer || '';
  if (server in global.wazoClients) {
    return fillClient(global.wazoClients[server]);
  }

  global.wazoClients[server] = new WazoApiClient({ server });

  return fillClient(global.wazoClients[server]);
};
