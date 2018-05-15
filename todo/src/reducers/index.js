import { ADD_TODO } from '../actions';

export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      const todoArr = [{ title: action.payload, completed: false, ID: Date.now() }];
      return state.concat(todoArr);

    default:
      return state;
  }
};