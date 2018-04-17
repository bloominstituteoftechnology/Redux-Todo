import { SUBMIT_TODO } from '../actions';

export const todos = [];

export default (todos, action) => {
  switch (action.type) {
    case SUBMIT_TODO:
      return todos.concat(action.payload);
    default:
      return todos;
  }
};