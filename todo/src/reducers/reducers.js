
import { ADDTODO, TOGGLECOMPLETED} from '../actions/actions.js';

export default (todo, action) => {
  switch (action.type) {
    case ADDTODO:
      // add item to todo list
    case TOGGLECOMPLETED:
      // toggle the checkbox next to the item in the list
    default:
      // default stuff
  }
};