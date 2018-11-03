import { ADD_TODO } from "../actions/action";

const initialState = {
  todos: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            todo: action.payload.task,
            id: Date.now(),
            completed: false
          }
        ]
      });
    default:
      return state;
  }
};
