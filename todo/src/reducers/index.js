import { FETCH_TODOS } from "../actions";
import { ADD_TODO } from "../actions";
import { DELETE_TODO } from "../actions";

export const todoReducer = (state = [], action) => {

  switch (action.type) {

    case FETCH_TODOS:
    return state.concat(action.payload);
    

    case ADD_TODO:
    return state.concat(action.payload);


    case DELETE_TODO:
    return state.filter((item)=> {
    return item.value !== action.payload.value
      })
      
    default:
      return state;
  }

};

