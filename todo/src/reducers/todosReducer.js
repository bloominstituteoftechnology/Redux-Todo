import {
  NEW_TODO,
  HANDLE_DELETE
} from '../actions';

export default (todos = [], action) => {
  switch (action.type) {
    case NEW_TODO:
      return todos.concat(action.payload);
      break;
    case HANDLE_DELETE:
      todos[action.payload] = Object.assign({}, todos[action.payload], { complete: true });
     
      return todos.filter((todo, index, arr) => {
        //todo.complete = false;
        console.log('action', action.payload)
        console.log('todo', arr[index])
        //todo.complete === false;
        if (todo.complete === false) {
          return arr[index]
        }
      });
    default:
      return todos;
  }
};