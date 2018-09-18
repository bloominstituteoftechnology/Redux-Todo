import { ADD_TODO,
        TOGGLE_COMPLETED,
        DELETE_COMPLETED,
        DELETE_ITEM } from '../actions';

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (todos = [{value: 'Walk the dog.', completed: false, id:Date.now()}], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [ ...todos, {value: action.text, id: action.id, completed:false} ]
    case TOGGLE_COMPLETED:
      return todos.map( todo => todo.id === action.id
        ? { ...todo, completed: !todo.completed }
        : todo )
    case DELETE_COMPLETED:
      return todos.filter( todo => !todo.completed )
    case DELETE_ITEM:
      return todos.filter( todo => todo.id !== action.id )
    default:
      return todos;
  }
};
