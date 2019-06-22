import { NEW_TODO } from "../actions";

//creating initial state
const initialState = {
  todos: [
    {
      value: "Walk the dog.",
      completed: false
    },
    {
      value: "Buy Milk.",
      completed: false
    }
  ]
};

function reducer(state = initialState, action) {
  console.log("reducer state:", state);
  switch (action.type) {
    //Creating new todo
    case NEW_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            value: action.payload,
            completed: false
          }
        ]
      });
    default:
      console.log("state:", state);
      return state;
  }
}

export default reducer;
