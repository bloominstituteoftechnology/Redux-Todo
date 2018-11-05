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
         const toggleTodos = state.todos.map(todo => {
            if(todo.id === action.id){
               return {...todo, completed: !todo.completed}
            }else
               return todo
         })
         return {todos: toggleTodos}
      case CLEAR:
         const filteredTodos = state.todos.filter(todo => {
            if(todo.completed !== true){
               return todo
            }
            return ""
         })
         return {todos: filteredTodos}
      default: 
         return state
   }
}