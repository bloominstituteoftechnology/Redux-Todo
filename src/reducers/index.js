import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '../actions'
const { localStorage } = window
const defaults = JSON.parse(localStorage.getItem('state')) || [
  { value: 'im not real' },
  { value: 'hi' },
  { value: 'chuck testa' }
]

let newState

export default (state = defaults, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      newState = [...state, payload]
      break

    case REMOVE_TODO:
      newState = state.filter(curVal => curVal.value !== payload.value)
      break

    case UPDATE_TODO:
      newState = state.map(todo => todo.value === payload.value ? payload : todo)
      break

    default:
      newState = state
  }

  localStorage.setItem('state', JSON.stringify(newState))
  return newState
}
