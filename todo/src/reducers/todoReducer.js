import {NEW_TODO, TOGGLE_COMPLETED} from '../actions/index';

export default ( todos = [], action) => {
  switch (action.type) {
    case NEW_TODO:
      return todos.concat(action.payload);          // build list

    case TOGGLE_COMPLETED:
      todos [action.payload].complete = !todos[action.payload].complete;    // toggle complete
      return todos;

    default:
      return todos;       // need this if no other choice

  }

};
