import { ADD_TODO } from '../actions';

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (todos = [{value: 'Walk the dog.', completed: false}], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [ ...todos, {value: action.text, completed:false} ]
    default:
      return todos;
  }
};
