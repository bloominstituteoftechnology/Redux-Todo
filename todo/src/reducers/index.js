import uuid from 'uuid'
import { ADD, TOGGLE, DELETE } from '../actions'

// check localstorage first to see if todos have been stored
// if not, then load the initial array of todos below
const local = localStorage.getItem('todos')

// if localStorage is empty chrome returns the string "undefined"
// whereas firefox returns the string "null"
// the easiest way to deal with both these cases was
// simply to inspect the string length returned from localstorage
const initialState = {
  todos:
    local.length > 30
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
