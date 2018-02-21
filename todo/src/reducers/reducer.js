import { ADD_TODO } from '../actions/add_todo';
import { TOGGLE_TODO } from '../actions/toggle_todo';

export default (todos = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return null;
    case TOGGLE_TODO:
      return null;
    default:
       return todos;
  }

};
