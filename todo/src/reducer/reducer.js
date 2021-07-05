import { ADD_TODO, DELETE_TODO } from '../actions/actions'
import { TOGGLE_TODO } from '../actions/actions'

const initState = {
  todos: [{ todo: "Take out the dog", completed: false, id: 0 }]
}

export function myReducer(state = initState, action) {
  switch (action.type) {
    case ADD_TODO:
      let newTodos = state.todos.map(todo => todo)
      let newTodo = { todo: action.todo, completed: false, id: action.id }
      newTodos.push(newTodo)
      return {
        ...state,
        todos: newTodos
      }

    case DELETE_TODO:
      let filteredTodos = state.todos.filter(todo => todo.id !== action.id)
      return {
        ...state,
        todos: filteredTodos
      }

    case TOGGLE_TODO:
      const toggleTodos = state.todos.map(todo => {
        if (todo.id === action.id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        } else return todo
      })

      return {
        ...state,
        todos: toggleTodos
      }

    default:
      return state
  }
}
