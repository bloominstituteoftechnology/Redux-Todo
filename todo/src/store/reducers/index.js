import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "../actions"

let initialState = JSON.parse(window.localStorage.getItem("state"))
if (!initialState) initialState = { todos: [] }

export default (state = initialState, action) => {
  let newTodos = []
  let newState = {}
  switch (action.type) {
    case ADD_TODO:
      if (!action.payload) return state
      newTodos = [
        ...state.todos,
        { id: new Date(), value: action.payload, completed: false }
      ]
      break

    case TOGGLE_TODO:
      newTodos = [...state.todos]
      const toggledTodo = newTodos.find(todo => todo.id === action.id)
      toggledTodo.completed = !toggledTodo.completed
      break

    case DELETE_TODO:
      newTodos = state.todos.filter(todo => todo.id !== action.id)
      break

    default:
      return state
  }
  newState = {
    ...state,
    todos: newTodos
  }
  window.localStorage.setItem("state", JSON.stringify(newState))
  return newState
}
