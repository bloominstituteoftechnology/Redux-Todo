import { ADDITEM, REMOVEITEM } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case ADDITEM:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case REMOVEITEM:
      return state;
    default:
      return state;
    }
};