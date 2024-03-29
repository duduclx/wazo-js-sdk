import React, { createContext, useContext } from 'react';
import * as DateUtils from './dateUtils'; // Importer toutes les fonctions et les états de dateUtils.js

const MyContext = createContext();

export const useMyContext = () => useContext(MyContext);

export const MyContextProvider = ({ children }) => {
  return (
    <MyContext.Provider value={DateUtils}>
      {children}
    </MyContext.Provider>
  );
};