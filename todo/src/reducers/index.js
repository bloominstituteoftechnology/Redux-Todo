import { ADD_TODO, TOGGLE_COMPLETED } from '../actions';

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (todos = [{value: 'Walk the dog.', completed: false, id:0}], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [ ...todos, {value: action.text, completed:false} ]
    case TOGGLE_COMPLETED:
      return todos.map( todo => todo.id === action.id
        ? { ...todo, completed: !todo.completed }
        : todo )
    default:
      return todos;
  }
};
