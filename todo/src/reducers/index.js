import { ADD_TODO } from '../actions';

export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      state = [{ ID: Date.now(), title: action.payload, completed: false }];
      return state;

    default:
      return state;
  }
};