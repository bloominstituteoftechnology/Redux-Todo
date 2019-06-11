import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  REMOVE_COMPLETED_TODOS
} from '../actions/types';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      console.log('inside of reducer');
      return state.concat(action.payload);
    case REMOVE_TODO:
      return state.filter(item => {
        return item.id !== action.payload;
      });
    case TOGGLE_TODO:
      return state.map(item => {
        if (item.id === action.payload) {
          return Object.assign({}, item, { completed: !item.completed });
        } else {
          return item;
        }
      });
    case REMOVE_COMPLETED_TODOS:
      return state.filter(item => !item.completed);
    default:
      return state;
  }
};
