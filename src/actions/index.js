let nextTodoId = 0

export const addTodo = (message) => {
  return {
    type: 'ADD_TODO',
    message,
    id: nextTodoId++,
    completed: false
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const deleteTodo = (id) => {
  return {
    type: 'DELETE_TODO',
    id
  }
}