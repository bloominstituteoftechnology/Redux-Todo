const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO': 
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.Map(todo =>
      (todo.id === action.id)
        ? {...todo, complete: !todo.completed}
        : todo
      )
    default:
      return state
  }
}

export default todos;