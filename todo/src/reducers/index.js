import { Hello,  } from '../actions';

const initialState = {
  word: 'bye'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case Hello:
    return {
      ...state,
      word: 'hello',
    }
    default:
      return state;
  }
};