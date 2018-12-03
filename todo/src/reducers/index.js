export const ADD_TODO = "ADD_TODO";

const initialState = {
  todos: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
