import { ADDTODO, TOGGLETODO } from '../actions'

export default (state = [], action) => {
    switch(action.type) {
        case ADDTODO:
        return [...state, action.payload];
    case TOGGLETODO:
 return state.map((todo) => {
     if (action.payload === todo.id) {
         todo.complete = !todo.complete;
         return todo;
     } else {
         return todo;
     }
        
 })
        default:
        return state;
    }
}