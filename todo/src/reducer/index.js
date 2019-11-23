import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../action";
const initialState = {
  todos: [{ value: "", completed: false }]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state
      };
    case REMOVE_TODO:
      return {
        ...state
      };
    case TOGGLE_TODO:
      return {
        ...state,
        completed: !state.completed
      };
    default:
      return;
  }
};
