import { ADD_TODO, UPDATE_TODO, REMOVE_TODO } from "../actions";

const initialState = [{ text: "Clean Basement", completed: false, id: 0 }];

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    default:
      return state;
  }
};
