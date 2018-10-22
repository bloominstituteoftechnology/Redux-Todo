import { ADD, TOGGLE, DELETE  } from '../actions'

export default (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [ ...state, action.todo ]
    case TOGGLE:
      // do stuff
      return state
    case DELETE:
      // do stuff
      return state
    default:
      return state
  }
}
