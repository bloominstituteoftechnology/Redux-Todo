import { DELETE_TODO, ADD_TODO } from "../actions/action";

const initialState = {
  todos: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const id = Date.now();
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          { todo: action.payload, id: id, complete: false }
        ]
      });
    case DELETE_TODO:
      return state;
    default:
      return state;
  }
};
