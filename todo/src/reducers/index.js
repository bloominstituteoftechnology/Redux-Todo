import uuid from 'uuid'
import { ADD, TOGGLE, DELETE } from '../actions'

const initialState = {
  todos: [
    {
      id: uuid(),
      value: 'Walk the dog.',
      completed: false
    },
    {
      id: uuid(),
      value: 'Walk the dog.',
      completed: false
    },
    {
      id: uuid(),
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
      return {
        ...state,
        todos: [
          ...state.todos.map(
            todo =>
              todo.id === action.id
                ? { ...todo, completed: !todo.completed }
                : todo
          )
        ]
      }
    case DELETE:
      // do stuff
      return state
    default:
      return state
  }
}
