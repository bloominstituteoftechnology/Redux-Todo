// import { INCREMENT, DECREMENT } from '../actions';
import { Object } from 'core-js';


export const initialState = {
todoList: []
};


export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
    return Object.assign({}, state, {
      todoList: action.payload
    });

    default:
      return state;
  }
};