//import action strings 
import {ADD, TOGGLE, CLEAR} from "./action"

//set initial state to the empty todo array
const initialState = { 
   todos: [
      {
         id: 1,
         task: "laundry",
         completed: false,
      },
      {
         id: 2,
         task: "dishes",
         completed: false,
      },
      {
         id: 3,
         task: "trash",
         completed: false,
      }
   ], 
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
         const toggleTodoMap = state.todos.map(todo => {
            if(todo.id === action.id){
               return {...todo, completed: !todo.completed}
            }else
               return todo
         })
         return {todos: toggleTodoMap}
      case CLEAR:
         return {}
      default: 
         return state
   }
}