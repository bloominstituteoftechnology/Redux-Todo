export const addTodo = text => ({
  type: 'ADD_TODO',
  text,
  completed: false
})


export const toggleTodo = (number) => ({
  type: 'TOGGLE_TODO',
  id:number
})

export const removeToDO = (number) => ({
  type: 'REMOVE_TODO',
  id:number
})