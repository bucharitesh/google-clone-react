export const initialState = {
  term: "",
  destination: "",
  origin: "",
  mode: "",
};

export const actionTypes = {
  SET_SEARCH_TERM: "SET_SEARCH_TERM",
  SET_DIRECTION: "SET_DIRECTION",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case actionTypes.SET_SEARCH_TERM:
      return {
        ...state,
        term: action.term,
      };
    case actionTypes.SET_DIRECTION:
      return {
        ...state,
        destination: action.destination,
        origin: action.origin,
        mode: action.mode,
      };

    default:
      return state;
  }
};

export default reducer;
