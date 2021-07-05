// reducer decides the return for the store and thats the state of the whole app
// action trigger the reducers

import { ADD_TODO } from '../action';

const initialState = {todos: []}

export const todoReducer = (state=initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: state.todos.concat(
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        )
      });
    default:
      return state;
  }
}