import { ADD_TODO, SLASH_TODO } from '../Actions/actions';

export default (todos = [], action) => {
    switch (action.type) {
      case ADD_TODO:
        return todos.concat(action.payload);
        case SLASH_TODO :
        return todos.map() 
        default:
        return todos;
    }
}