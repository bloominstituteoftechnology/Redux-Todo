import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions'

const initialState = {
  todos: [
   { todo: 'Walk the dog', completed: false },
   { todo: 'Make Shopping', completed: false }
  ]
 }

export const reducer = (state = initialState, action) => {
  //console.log("did the action make it to the reducer????");
  switch(action.type) {

    case ADD_TODO:
      const newTodo = { todo: action.payload, completed: false }
      return {
        ...state,
        todos: [ ...state.todos, newTodo ]
      }

      case TOGGLE_TODO:
        return {
          ...state,
          todos: state.todos.map((todo, index) => {
             if(action.payload === index) {
               return {
                 ...todo,
                 completed: !todo.completed
               }
             } else {
               return todo
             }
          })
        }

      case DELETE_TODO:
        return  {
          ...state,
           todos: state.todos.filter(todo => {
             return todo.completed !== true
        })
      }
      
      default:
        return state
  }
}



   

