import { ADD, REMOVE } from "../actions";

const initialState = {
  todos: [{ value: "default", remove: false }]
};

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      console.log(action.payload);
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            value: action.payload.value,
            remove: action.payload.remove
          }
        ]
      };

    case REMOVE:
      return {
        ...state,
        remove: true
      };
    default:
      return state;
  }
};
