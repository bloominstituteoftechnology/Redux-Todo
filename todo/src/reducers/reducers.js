import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from '../actions/actions';

let ID = 0;

const initialState = [];

export default (todos = initialState, action) => {
  switch(action.type) {
    case ADD_TODO:
      return [
        ...todos,
        {
          id: ID++,
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