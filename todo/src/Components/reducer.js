//import action strings 
import {ADD, TOGGLE, CLEAR} from "./action"

//set initial state to the empty todo array
const initialState = { 
   todos: [], 
}

//reducer matches action type and returns a new object depending on which action matches
export default (state = initialState, action) => {
   switch(action.type){
      case ADD:
         return Object.assign({}, state, {
            todos: [
               ...state.todos,
               {
                  id: state.todos.length + 1,
                  task: action.text,
                  completed: false,
               }
            ]})
      case TOGGLE:
            return {}
      case CLEAR:
         return {}
      default: 
         return state
   }
}