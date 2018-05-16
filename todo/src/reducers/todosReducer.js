import {
  NEW_TODO,
  HANDLE_DELETE
} from '../actions';

export default (todos = [], action) => {
  switch (action.type) {
    case NEW_TODO:
      return todos.concat(action.payload);
    case HANDLE_DELETE:
      // handle delete
      return todos;
    default:
      return todos;
  }
};