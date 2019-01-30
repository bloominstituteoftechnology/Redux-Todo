import { ADD_TODO } from "../actions"

const initialState = {
  todos: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodos = [
        ...state.todos,
        { value: action.payload, completed: false }
      ]
      return {
        ...state,
        todos: newTodos
      }
    default:
      return state
  }
}
