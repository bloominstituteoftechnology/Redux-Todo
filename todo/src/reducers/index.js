import {ADD, COMPLETE} from '../actions';

const initialState = {
  name: "testitems",
  completed: false
}

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default(state = initialState, action) => {
  switch (action.type) {
    case
      ADD:
      return {completed: false, name: state.name + action.payload}
    case
      COMPLETE:
      return {completed: true, name: action.payload}

    default:
      return state;
  }
};
