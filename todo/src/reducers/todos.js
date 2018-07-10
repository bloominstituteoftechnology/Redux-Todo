import { ADD_TODO } from '../actions/addTodo'

const initialState = {
  todos: [
    {
      id: 0,
      value: 'hello',
      completed: false
    }
  ]
}

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: state.todos.concat(action.payload) }
    default:
      return state
  }
}
