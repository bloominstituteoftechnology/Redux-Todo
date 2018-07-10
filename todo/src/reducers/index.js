import {ADD_TODO} from '../actions';

const initialList = {
  todos: ['fiaofjfa', 'fwfijfjaowfj', 'jfoawjfaf']
}

export default (state = [], action) => {
  switch(action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    default:
      return state;
  }
}
