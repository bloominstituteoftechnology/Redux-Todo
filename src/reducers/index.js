import { ADD_TODO, REMOVE_TODO } from '../actions'
export default (
  state = [{ value: 'im not real' }, { value: 'hi' }, { value: 'chuck testa' }],
  { type, payload }
) => {
  switch (type) {
    case ADD_TODO:
      return [...state, payload]
    case REMOVE_TODO:
      return state.filter(curVal => curVal.value !== payload.value)
    default:
      return state
  }
}
