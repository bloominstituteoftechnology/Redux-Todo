import { ADD_TODO } from '../ActionCall';

export default (note = ['testing'], action) => {
    switch (action.type) {
      case ADD_TODO:
        return [...note, action.payload];
      default:
        return note
    }
  }


