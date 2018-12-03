import { ADDTODO } from "../actions/";

const initialState = {
  todos: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADDTODO:
      return {
        ...state,
        todos: state.todos
      };
    default:
      return state;
  }
};
