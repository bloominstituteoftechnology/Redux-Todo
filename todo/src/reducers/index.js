import { ADD, TOGGLE, DELETE } from '../actions'

const initialState = {
  todos: [
    {
      value: 'Walk the dog.',
      completed: false
    },
    {
      value: 'Walk the dog.',
      completed: false
    },
    {
      value: 'Walk the dog.',
      completed: true
    }
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return { ...state, todos: [...state.todos, action.todo] }
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
