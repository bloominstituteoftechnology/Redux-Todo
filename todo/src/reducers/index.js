//import { HELLO,  } from '../actions';

const initialState = {
  word: 'FIGHTING!'
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