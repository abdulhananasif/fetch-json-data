const AppReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FACTS":
      return {
        ...state,
        facts: action.payload
      }
    default:
      return state
  }
}

export default AppReducer