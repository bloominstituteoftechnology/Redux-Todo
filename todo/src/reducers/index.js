import uuid from 'uuid'
import { ADD, TOGGLE, DELETE } from '../actions'

const local = localStorage.getItem('todos')

const initialState = {
  todos:
    local !== 'undefined'
      ? JSON.parse(local)
      : [
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
      return {
        ...state,
        todos: [...state.todos.filter(({ id }) => id !== action.id)]
      }
    default:
      return state
  }
}
