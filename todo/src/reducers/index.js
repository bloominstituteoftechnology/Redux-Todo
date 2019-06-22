import { NEW_TODO } from "../actions";

//creating initial state
const initialState = {
  todos: [
    {
      value: "Walk the dog.",
      completed: false
    },
    {
      value: "Buy milk.",
      completed: false
    }
  ]
};

function reducer(state = initialState, action) {
  console.log("reducer:", action.payload);
  switch (action.type) {
    case NEW_TODO:
      return {
        todos: [
          {
            ...state,
            value: action.payload,
            completed: false
          }
        ]
      };
    default:
      console.log("state:", state);
      return state;
  }
}

export default reducer;
