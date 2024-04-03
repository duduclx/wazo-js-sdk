import React, { createContext, useContext } from 'react';

const AppContext = createContext();

export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }) => {

  const value = {}
  
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};