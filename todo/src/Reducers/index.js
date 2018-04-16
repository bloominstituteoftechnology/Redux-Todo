import { INCREMENT, DECREMENT } from "../actions";

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (state = [{}], action) => {
  switch (action.type) {
    case ADDTODO:
      return {

        }
    case COMPLETETODO:
      return {
          state.completed = false;
        }
    default:
      return state;
  }
};
