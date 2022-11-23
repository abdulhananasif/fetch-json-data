import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  facts: null
}
const GlobalContext = createContext(initialState)

export default GlobalContext;

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)
  const updateFacts = (facts) => {
    dispatch({
      type: "UPDATE_FACTS",
      payload: facts
    })
  }
  return <GlobalContext.Provider value={{ facts: state.facts, updateFacts }}>
    {children}
  </GlobalContext.Provider>
}