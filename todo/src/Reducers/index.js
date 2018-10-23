import {DELETETODO,ADDTODO} from '../Actions'

export default (action) => {
    switch (action.type) {
      case ADDTODO:
      case DELETETODO:
      default:
        return '';
    }
  };
  