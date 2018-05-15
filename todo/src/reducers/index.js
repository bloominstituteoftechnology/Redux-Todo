import { ADD_TODO } from '../actions';

export const todoReducer = ( state = [], action) => {
   switch (action.type) {
        case ADD_TODO:
            return state.concat(action.payload);
        default:
            return state;
   }
}