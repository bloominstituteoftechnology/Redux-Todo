import { ADD_TODO } from '../actions/addTodo'

export const todoReducer = (state = [ 'toDo', 'testing' ], action) => {
  switch (action.type) {
    case ADD_TODO:
      console.log(action)
      return [ ...state, action.payload ]
    default:
      console.log(action)
      return state
  }
}
