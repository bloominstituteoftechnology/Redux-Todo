import { ADD_TODO } from '../actions/actions'

const initState = {
  todos: [{ todo: "Take out the dog", completed: false, id: 0 }]
}

export function myReducer(state = initState, action) {
  switch (action.type) {
    case ADD_TODO:
      let newTodos = state.todos.map(todo => todo)
      let newTodo = { todo: action.todo, completed: false, id: action.id }
      newTodos.push(newTodo)
      return {
        ...state,
        todos: newTodos
      }
    default:
      return state
  }
}
