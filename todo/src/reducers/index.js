import { ADD_TODO, DELETE_TODO } from '../actions';

export const todoReducer = ( state = [], action) => {
   switch (action.type) {
        case ADD_TODO:
            return state.concat(action.payload);
        case DELETE_TODO:
            return state.filter((item) => item !== action.payload);
        default:
            return state;
   }
}