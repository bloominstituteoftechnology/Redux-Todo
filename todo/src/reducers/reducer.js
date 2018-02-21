import { ACTION1 } from '../actions/action1';
import { ACTION2 } from '../actions/action2';

export default (state = [], action) => {
  switch (action.type) {
    case ACTION1:
      return null;
    case ACTION2:
      return null;
    default:
       return state;
  }

};
