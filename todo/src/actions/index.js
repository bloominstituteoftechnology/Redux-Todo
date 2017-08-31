
let nextTodoId = 1;
export const addTodo = (value) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  value
})

export const toggleComplete = (id) => ({
  type: 'TOGGLE_COMPLETE',
  id
})