//import { HELLO,  } from '../actions';

const initialState = {
  word: 'bye'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'HELLO':
    return {
      ...state,
      word: action.payload,
    }
    default:
      return state;
  }
};