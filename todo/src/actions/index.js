export const handleInput = input => {
  return {
    type: 'HANDLE_INPUT',
    payload: input
  }
}

export const addTodo = () => {
  return {
    type: 'ADD_TODO'
  }
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    payload: id
  }
}

export const clearCompletedTodos = () => {
  return {
    type: 'CLEAR_COMPLETED_TODOS'
  }
}

export const deleteTodo = id => {
  return {
    type: 'DELETE_TODO',
    payload: id
  }
}
