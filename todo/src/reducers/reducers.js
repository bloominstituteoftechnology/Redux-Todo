
import { ADDTODO, TOGGLECOMPLETED} from '../actions/actions.js';

export default (todo, action) => {
  switch (action.type) {
    case ADDTODO:
      // addtodo stuff
    case TOGGLECOMPLETED:
      // toggle stuff
    default:
      // default stuff
  }
};