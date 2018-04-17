import { ADD_TODO, UPDATE_TODO } from "../actions";

export default (state = [{}], action) => {
  switch (action.type) {
    case ADD_TODO:
          return [...state, {text: action.payload, completed: false}]
    case UPDATE_TODO:
          return state.completed = action.payload;
    default:
      return state;
  }
};
