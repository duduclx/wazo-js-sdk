import React, { useState, useContext, createContext, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

import Wazo from "../../src/simple/index";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  let session = "";

  const authenticateFromToken = async () => {
    const host = await AsyncStorage.getItem('host')
    const token = await AsyncStorage.getItem('token')
    if(!host || !token) {
      return
    }
    initConnection(host)

    const session = await Wazo.Auth.validateToken(token)

    if(session) {
      await AsyncStorage.setItem('host', host)
      await AsyncStorage.setItem('token', session.token)
      //session.server = host;
      setUser(session)
      Wazo.Auth.setOnRefreshToken( async (token) => {
        await AsyncStorage.setItem('token', token)
      });
    }
  }

  const login = async (email, password, server, extra) => {
    setLoading(true);
    setErrorMessage("");
    // init
    initConnection(server);

    // retrieve session
    try {
      // doit mettre en paramètre backend ("BACKEND_WAZO = DEFAULT_BACKEND_USER" ou "BACKEND_LDAP = BACKEND_LDAP_USER")
      // et passer extra
      // toujours erreur authentification
      session = await Wazo.Auth.logIn(email.trim(), password.trim());
      session.server = server;
      await AsyncStorage.setItem('host', server)
      await AsyncStorage.setItem('email', email)
      await AsyncStorage.setItem('token', session.token)
    } catch (e) {
      displayAuthError(e);
    }

    validUser();

    // refresh token
    Wazo.Auth.setOnRefreshToken( async (token) => {
      await AsyncStorage.setItem('token', token)
    });
  };

  const logout = async () => {
    await Wazo.Phone.disconnect();
    await Wazo.Auth.logout();
    setUser(null);
  };

  const initConnection = (server) => {
    Wazo.Auth.init("tori-mobile", 3600);
    Wazo.Auth.setHost(server);
  }

  const displayAuthError = e => {
    console.log('err', e)
    if (e.toString().includes("TypeError")) {
      //setErrorMessage(t("login.form_error_server"));
    } else {
      const error = JSON.parse(e.message);
      if (error.reason[0].includes("Authentication")) {
        //setErrorMessage(t("login.form_error_login"));
      } else {
        //setErrorMessage(t("login.form_error_other"));
      }
    }
  }

  const validUser = () => {
    setLoading(false);
    setUser(session);
  }

  
  const updatePassword = async (oldPassword, newPassword) => {
    try {
      await Wazo.auth.updatePassword(
        user.uuid,
        oldPassword,
        newPassword
      );
    } catch (e) {
    }
  };

  useEffect(() => {
      authenticateFromToken()
  }, [])


  const value = {
    user,
    loading,
    errorMessage,
    setErrorMessage,
    onLogin: login,
    onLogout: logout,
    updatePassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};