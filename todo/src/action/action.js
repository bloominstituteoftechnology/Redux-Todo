export const UPDATE_COMPLETE = 'UPDATE_COMPLETE'
export const ADD_TODO = 'ADD_TODO'

export const updateComplete = (id) => {
  return {type: UPDATE_COMPLETE, id: id }
}

export const addTodo = (todo) => {
  return {type: ADD_TODO, payload: {value: todo, completed: false}}
}