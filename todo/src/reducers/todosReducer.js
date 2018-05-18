import {
  NEW_TODO,
  HANDLE_DELETE
} from '../actions';

export default (todos = [], action) => {
  console.log(action.type)
  switch (action.type) {

    case NEW_TODO:
      return todos.concat(action.payload);
      break;
    
    case HANDLE_DELETE:
      todos[action.payload] = Object.assign({}, todos[action.payload], { completed: true });
      //console.log('todos[action.payload]', todos[action.payload]);
      return todos.filter(todo => todo.completed === false);
        //todo.complete = false;
        console.log('action payload', action.payload)
        //console.log('arr', arr[index])
        //return todo.complete === false;
        // if (todo.complete === false) {
        //   return arr[index]
        // }   
        //});
    default:
      return todos;
  }
};