import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from '../actions/todos';

const testState = [];
  
  let id = 0;

  export default (todos = testState , action) => {
    switch(action.type) {
      case ADD_TODO:
        return [
          ...todos,
          {
            id: id++,
            text: action.text,
            completed: false
          }
        ];
      case TOGGLE_TODO:
        return todos.map(todo => {
          if(todo.id === action.id){
            return {
              ...todo,
              completed: !todo.completed
            }
          } else{
            return todo
          }
        });
      case REMOVE_TODO:
        return todos.filter(todo => todo.id !== action.id);
      default:
        return todos;
    }
  }