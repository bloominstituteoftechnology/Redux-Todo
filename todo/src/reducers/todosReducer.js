import { NEW_TODO, TOGGLE_COMPLETE } from '../actions';

export default (todos = [], actions) => {
    switch (actions.type) {
        case NEW_TODO:
         return todos.concat(actions.payload);
        case TOGGLE_COMPLETE:
         todos[actions.payload].complete = !todos[actions.payload].complete;
         return todos;
         default:
         return todos;
       /*  case DELETE_TODOS:
          return {todos: actions.payload} */
    }
};