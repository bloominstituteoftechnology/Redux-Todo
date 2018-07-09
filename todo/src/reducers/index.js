import { ADD_TODO, TOGGLE_TODO } from "../actions/index";

const initialState = {
  todos: []
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: state.todos.push(action.payload)
      });
    case TOGGLE_TODO:
      return Object.assign({}, state, { completed: !state.completed });
    default:
      return state;
  }
};

export default todoReducer;
