import { ADD_TODO } from '../actions';

const initailState = {
    todos: []
}

 const rootReducer = (state = initailState, action) => {
    switch(action.type){
        case ADD_TODO:
        return {
           ...state,
           todos: [...state.todos, action.payload]
         }
         default:
         return state
    }
     
 }

 export default rootReducer;