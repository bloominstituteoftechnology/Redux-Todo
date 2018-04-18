import { ADD_TODO, UPDATE_TODO, REMOVE_TODO } from '../actions/actions';

export const reducer = (state = [], { type, payload }) => {
  switch(type) {

    case ADD_TODO:
      return [...state, payload];

    case UPDATE_TODO:
      return state.map(todo => todo.value === payload.value ? payload : todo)

    case REMOVE_TODO:
      return state.filter(item => item.value !== payload.value)

    default:
      return state;
  }
}