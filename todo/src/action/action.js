export const UPDATE_COMPLETE = 'UPDATE_COMPLETE'
export const ADD_TODO = 'ADD_TODO'

export const updateComplete = () => {
  return {type: UPDATE_COMPLETE}
}

export const addTodo = (todo) => {
  return {type: ADD_TODO, payload: {value: todo, completed: false}}
}