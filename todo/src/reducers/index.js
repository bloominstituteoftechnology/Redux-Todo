import { ADD_TODO, CHANGE_TODO } from "../actions/index";

const initialState = {
  todoList: ["walk dog", "dishes", "laundry"]
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TODO:
      console.log("change");
    case ADD_TODO:
      console.log("Add");
      return Object.assign({}, state, {});
    default:
      return state;
  }
};
