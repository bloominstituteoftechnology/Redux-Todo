import { ADD_TODO } from './actions.js';

export default (todos = null, action) => {
  switch(action.type) {
    case ADD_TODO:
      return action.payload;
    default:
      return todos;
  }
}