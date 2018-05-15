import { FETCH_TODOS } from "../actions";
import { ADD_TODO } from "../actions";

export const todoReducer = (state = [], action) => {

  if (action.type === FETCH_TODOS) {
    return state.concat(action.payload);
  }


  switch (action.type) {

    case FETCH_TODOS:
      return state.concat(action.payload);

    case ADD_TODO:
      return state.concat(action.payload);

    default:
      return state;
  }

};

