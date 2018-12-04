import { ADD_TODO } from "../actions/";
import { TOGGLE_COMPLETE } from "../actions/";
import { REMOVE_COMPLETED } from "../actions/";

const initialState = {
  todos: [
    {
      value: "Add my wishlist items for Secret Santa",
      completed: false
    },
    {
      value: "Buy my Secret Santa their gift",
      completed: false
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state, action.payload]
      };
    default:
      return state;
  }
};
