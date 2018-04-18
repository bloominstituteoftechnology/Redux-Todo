import { ADD_TODO, TOGGLE_TODO } from "../actions/actions";


export const reducer = (state = [], action) => {
  switch(action.type) {
    case ADD_TODO: 
      return [...state, {text: action.text, id: action.id, completed: false}];
    case TOGGLE_TODO:
      return state.map(todo => {return todo.id === action.id ? {...todo, completed: !todo.completed} : todo});
    default:
      return state;
  }
}