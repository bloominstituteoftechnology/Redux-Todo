export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'


export default addTodo = todo => {
  return {
    type: ADD_TODO,
    payload: todo
  }
}

export default toggleTodo = index => {
  return {
    type: TOGGLE_TODO,
    payload: index
  }
}
