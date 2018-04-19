import { ADD_TODO, TOGGLE_TODO } from '../actions/actions';
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (todos = [{value: 'buy milk', completed: false}], action) => {
  switch (action.type) {
      //rename
    case ADD_TODO:
    return [
                ...todos,
                {
                    value: action.payload,
                    completed: false
                }
            ]
    // Fill in the body of this case
    case TOGGLE_TODO:
        return todos.map(todo => (todo.payload === action.payload )
                    ? {...todo, completed: !todo.completed}
                    : todo
        )
    // Fill in the body of this case 
    default:
      return todos;
  }
};