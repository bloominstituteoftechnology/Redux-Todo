import { ADD_TODO } from '../actions';

export default (state = null, action) => {
  switch (action.type) {
    case ADD_TODO:
      console.log('payload: ', action.payload);
      return state
    default:
      return state;
  }
}