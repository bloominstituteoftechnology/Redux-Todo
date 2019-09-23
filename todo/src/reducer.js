import {ADD, TOGGLE, CLEAR} from "./actions"
const initialState = { 
  todos: [
    {
       id: 1,
       task: "laundry",
       completed: false,
    },
    {
       id: 2,
       task: "wash car",
       completed: false,
    },
    {
       id: 3,
       task: "take out trash",
       completed: false,
    }
 ], 
 
}
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