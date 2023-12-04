## Exemple

Il est possible de créer un context React afin de récupérer les informations de session de l'utilisateur.

Dans votre projet réact, il faudra créer le provider et l'importer à la racine de votre application.

<div class="useless-tab-container">

- **AuthProvider**

  Créer le fichier `src/services/AuthProvider.jsx`

  ```js
  import React, { useState, useContext, createContext } from "react";
  import {
    setSessionOnStorage,
    setLogInfoOnStorage,
    removeSessionOnStorage,
    getSessionOnStorage,
  } from "../stores/LocalStorage";

  import Wazo from "@wazo/sdk/lib/simple";
  import { t } from "i18next";

  const AuthContext = createContext();

  export const useAuth = () => {
    return useContext(AuthContext);
  };

  export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    let session = "";

    const login = async (email, password, server) => {
      setLoading(true);
      setErrorMessage("");
      // init
      initConnection(server);

      // retrieve session
      try {
        session = await Wazo.Auth.logIn(email.trim(), password.trim());
        session.server = server;
      } catch (e) {
        displayAuthError(e);
      }

      validUser();

      // refresh token
      Wazo.Auth.setOnRefreshToken((token) => {
        console.log("token refresh", token);
        // setUser({ token });
        // mettre à jour dans session, puis
        // setUser(session);
        // setSessionOnStorage(session);
        // setLogInfoOnStorage(session);
      });
    };

    const logout = async () => {
      await Wazo.Auth.logout();
      removeSessionOnStorage();
      setUser(null);
    };

    const initConnection = (server) => {
      Wazo.Auth.init("wazo-desktop", 3600);
      Wazo.Auth.setHost(server);
    };

    const connectFromStorage = async () => {
      const rawSession = getSessionOnStorage();
      if (rawSession) {
        try {
          initConnection(rawSession.server);
          session = await Wazo.Auth.validateToken(
            rawSession.token,
            rawSession.refreshToken
          );
          if (session) {
            validUser();
          }
        } catch (e) {
          displayAuthError(e);
        }
      }
    };

    const displayAuthError = (e) => {
      if (e.toString().includes("TypeError")) {
        setErrorMessage(t("login.form_error_server"));
      } else {
        const error = JSON.parse(e.message);
        if (error.reason[0].includes("Authentication")) {
          setErrorMessage(t("login.form_error_login"));
        } else {
          setErrorMessage(t("login.form_error_other"));
        }
      }
    };

    const validUser = () => {
      setLoading(false);
      setUser(session);
      setSessionOnStorage(session);
      setLogInfoOnStorage(session);
    };

    const updatePassword = async (oldPassword, newPassword) => {
      try {
        await Wazo.auth.updatePassword(user.uuid, oldPassword, newPassword);
        return {
          status: "success",
          title: t("login.update_password_event"),
          description: t("login.update_password_event_true"),
          duration: 5000,
        };
      } catch (e) {
        return {
          status: "error",
          title: t("login.update_password_event"),
          description: t("login.update_password_event_false"),
          duration: 5000,
        };
      }
    };

    const value = {
      user,
      loading,
      errorMessage,
      onLogin: login,
      onLogout: logout,
      updatePassword,
    };

    return (
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
  };
  ```

- **App**

  Votre App doit être contenu dans le `AuthProvider`

  ```js
  import React from "react";

  import { AuthProvider } from "./services/AuthProvider";
  import Index from "./layouts/Index";

  function App() {
    return (
      <AuthProvider>
        <Index />
      </AuthProvider>
    );
  }

  export default App;
  ```

- **Login Screen**

  Vous pouvez importer les `values` du AuthProvider dans voter page de login.

  ```js
  import { useState } from 'react';
  import { useAuth } from '../services/AuthProvider';

  function Login() {

    // authprovider
    const { onLogin, loading, errorMessage } = useAuth();
    // ajouter les données du formulaire d'authentification
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [server, setServer] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    return (
      // ici votre formulaire

      // bouton de connexion
      <Button
        onClick={() => onLogin(email, password, server)}
      >
    );
  }

  export default Login;

  ```

</div>
