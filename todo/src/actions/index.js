export const ADD_TODOS = "ADD_TODOS";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";

export const addToDos = todo => {
  return {
    type: ADD_TODOS, 
    payload: todo,
  }
}

export const toggleCompleted = id => {
  return {
    type: TOGGLE_COMPLETED,
    payload: id,
  }
}