let nextId = 0;

export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextId++,
    text,
  }
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id,
  }
}