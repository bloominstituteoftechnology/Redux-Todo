import { ADDTODO, COMPLETETODO } from '../Actions/Actions';

export default (state = [], action) => {
  switch (action.type) {
    case ADDTODO:
      return [...state, action.payload];
    case COMPLETETODO:
      state.map((item) => {
        if (item.todo === action.component){
          item.complete = !item.complete;
        }
      });
      return [...state];

    default:
      return state;
  }
}
