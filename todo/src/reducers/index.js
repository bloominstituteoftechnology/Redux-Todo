// import actions
import {
  ADDTODO,
  DELETETODO,
  COMPLETETODO,
  PUTTODOSFROMLOACALSTORAGE
} from '../actions'

const initialState = {
  todos: []
}

export default (state = initialState, action) => {
  const {
    todos
  } = state
  let newTodos
  switch (action.type) {

    case ADDTODO:
      newTodos = [
        ...todos, {
          value: action.value,
          completed: false
        }
      ]
      return Object.assign({}, state, {
        todos: newTodos
      })

    case DELETETODO:
      newTodos = [...todos]
      newTodos.splice(action.id, 1) 
      return Object.assign({}, {
        todos: newTodos
      })

    case COMPLETETODO:
      newTodos = [...todos]
      newTodos[action.id].completed = !newTodos[action.id].completed
      return Object.assign({}, state, {
        todos: newTodos
      })

    case PUTTODOSFROMLOACALSTORAGE:
      return Object.assign({}, state, {
        todos: action.todos
      })

    default:
      return state
  }
}