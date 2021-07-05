import { ADD_TODO } from '../actions';

export default function reducer(state, action) {
  console.log('in reducer: ', action);
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.payload);
    default:
      return state;
  }
}
