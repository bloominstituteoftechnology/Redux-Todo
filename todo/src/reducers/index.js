import { ADD_TODO } from "../actions/";
import { TOGGLE_COMPLETE } from "../actions/";
import { REMOVE_COMPLETED } from "../actions/";

const initialState = {
  todos: [
    {
      id: 0,
      value: "Add my wishlist items for Secret Santa",
      completed: false
    },
    {
      id: 1,
      value: "Buy my Secret Santa their gift",
      completed: false
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          value: action.value,
          completed: false
        }
      ];
    default:
      return state;
  }
};
