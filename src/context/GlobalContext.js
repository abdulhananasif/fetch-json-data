import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  facts: null
}
const GlobalContext = createContext(initialState)

export default GlobalContext;

export const GlobalProvider = () => {
  const [state, dispatch] = useReducer(AppReducer, initialState)
  return <GlobalContext.Provider value={{ facts: state.facts }}>
    {children}
  </GlobalContext.Provider>
}