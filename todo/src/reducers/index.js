import {ADD_TODO,TOGGLE_ITEM,DELETE_ITEM} from '../actions';

const initialState={
    todos:[]
}
export default function toDoApp(state=initialState,action) {
    switch(action.type) {
        case ADD_TODO:
        return Object.assign({},state,{
            todos:[...state.todos,{
                id:Date.now(),
                value:action.value,
                completed:false
            }
        ]
        })
        case TOGGLE_ITEM:
      return Object.assign({}, state, {
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return Object.assign({}, todo, {
              completed: !todo.completed
            })
          }
          return todo
        })
      })
      case DELETE_ITEM:
      return Object.assign({},state,{
          todos:state.todos.filter(e=>e.id!==action.payload)
      })

        default:
            return {
                ...state
            }
    }
}
