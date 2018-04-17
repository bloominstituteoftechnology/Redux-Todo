import { SUBMIT_TODO } from '../actions';

export default (todos = [], action) => {
  switch (action.type) {
    case SUBMIT_TODO:
      return todos.concat(actions.payload);
    default:
      return todos;
  }
};