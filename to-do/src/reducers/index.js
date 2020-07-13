import { ADD_TODO } from "../actions";

const initialState = {
  todos: [
    {
      value: "walk the dog",
      completed: false
    },
    {
      value: "clean the kitchen",
      completed: false
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { todos: (state.todos += action.payload) };

    default:
      return state;
  }
};
