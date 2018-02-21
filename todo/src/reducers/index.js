import { ADD_TODO, COMPLETED } from "../actions";

// Our reducer that handles our two action cases,
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do the count in each case?
export default (todos = [], action) => {
  console.log("Action: ", action);
  switch (action.type) {
    case ADD_TODO:
      return [...todos, action.payload];
    case COMPLETED:
      return [
        ...todos.slice(0, action.payload.index),
        ...todos.slice(action.payload.index + 1)
      ];
    default:
      return todos;
  }
};
