

const initialState = {
  cash: 123213213,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CASH":
      return {...state, cash: state.cash + action.payload}
    default:
      return state
  }
};

export default reducer;