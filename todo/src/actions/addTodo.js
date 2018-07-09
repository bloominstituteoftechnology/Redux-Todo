export const ADD_TODO = 'ADD_TODO'
// text goes  in here
export const addTodo = (newTodo) => {
  return {
    type: ADD_TODO,
    payload: newTodo
  }
}
