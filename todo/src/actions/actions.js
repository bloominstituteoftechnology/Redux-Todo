

export const addTodo = task => {
  return {
    type: 'ADD_TODO',
    payload: task
  }
}

export const handleInput = text => {
  return {
    type: 'HANDLE_INPUT',
    payload: text
  }  
}

export const toggleComplete = id => {
  return {
    type: 'TOGGLE_COMPLETE',
    payload: id
  }
}