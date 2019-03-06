import { ADD_TODO } from '../actions/action'
const initialState = {}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state, action.payload]
      }

    default:
      return state
  }
}

export default reducer
