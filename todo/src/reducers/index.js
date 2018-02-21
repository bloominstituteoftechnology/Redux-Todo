import { ADD_TODO } from "../actions";

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
    default:
      return todos;
  }
};
