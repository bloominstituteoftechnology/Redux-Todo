export const ADD_TODOS = "ADD_TODOS";


export const addToDos = todo => {
  return {
    type: ADD_TODOS, 
    payload: todo,
  }
}