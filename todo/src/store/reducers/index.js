import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "../actions"

const initialState = {
  todos: []
}

export default (state = initialState, action) => {
  let newTodos = []
  switch (action.type) {
    case ADD_TODO:
      if (!action.payload) return state
      newTodos = [
        ...state.todos,
        { id: new Date(), value: action.payload, completed: false }
      ]
      return {
        ...state,
        todos: newTodos
      }

    case TOGGLE_TODO:
      newTodos = [...state.todos]
      const toggledTodo = newTodos.find(todo => todo.id === action.id)
      toggledTodo.completed = !toggledTodo.completed
      return {
        ...state,
        todos: newTodos
      }

    case DELETE_TODO:
      newTodos = state.todos.filter(todo => todo.id !== action.id)
      return {
        ...state,
        todos: newTodos
      }

    default:
      return state
  }
}
