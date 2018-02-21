import { ADD_TODO, TOGGLE_TODO } from '../actions';

const todoReducer = (todos = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return todos.concat(action.payload);
    case TOGGLE_TODO:
      todos[action.payload].complete = !todos[action.payload].complete;
      return todos;
    default:
      return todos;
  }
};

export default todoReducer;
