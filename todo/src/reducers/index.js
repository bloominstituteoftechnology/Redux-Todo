import { ADD_TODO } from '../actions';
// { REMOVE_TODOS }
const todos = {
  todos: [
    {
      value: 'Walk The Dog',
      completed: false,
      id: 1337101
    },
    {
      value: 'Eat the Dog',
      completed: false,
      id: 1337102
    }
  ]
};

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (todos, action) => {
  switch (action.type) {
    case ADD_TODO:
      return null;
    default:
      return count;
  }
};
