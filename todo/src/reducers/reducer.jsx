const initialState = {
  todos: [
    {
      id: Date.now(),
      value: "Complete Lambda School",
      completed: false
    }
  ],
  input: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    
    case "INPUT_CHANGE":
      return Object.assign({}, state, { input: action.payload })
    
    case "ADD_TODO":
      if (!state.input) {
        return Object.assign({}, state, { todos: state.todos, input: '' })
      }
      let todo = { id: Date.now(), value: state.input, completed: false }
      let newToDos = state.todos.slice()
      newToDos.push(todo)
      return Object.assign({}, state, { todos: newToDos, input: '' })
    
    case "TODO_COMPLETED":
      let completedToDos = state.todos.slice()
      completedToDos.map(todo => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
          return todo;
        }
        return todo;
      })
      return Object.assign({}, state, { todos: completedToDos })
    
    default:
      return state
  }
}