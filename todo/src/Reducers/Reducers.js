import { ADDTODO } from '../Actions/Actions';

export default (state = [], action) => {
  switch (action.type) {
    case ADDTODO:
      return [...state, action.payload];
    default:
      return state;
  }
}
