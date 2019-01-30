import { ADD_TODO, TOGGLE_TODO, CLEAR_COMPLETED } from '../actions'

const initialState = {
  todos: [
    { todo: 'workout', completed: false },
    { todo: 'do laundry', completed: true },
    { todo: 'work on car', completed: false },
  ]
}

function reducer(state = initialState, action) {
  console.log("reducer", action);
  switch(action.type) {
    case ADD_TODO:
      const newTodo = {
        todo: action.payload,
        completed: false
      };
      return {
        ...state,
        todos: [...state.todos, newTodo]
      }
      case TOGGLE_TODO:
        return {
          ...state,
          todos: state.todos.map((todo, index) =>
            action.payload === index
            ? {...todo, completed: !todo.completed }
            : todo
          )
        }
        case CLEAR_COMPLETED:
          return {
            ...state,
            todos: state.todos.filter(todo => todo.completed === false)
          }
        
    default:
    return state;
  }
  
}

export default reducer;