export let newID = 1
export const ADD_TODO = "ADD_TODO"
export const TOGGLE_TODO = "TOGGLE_TODO"
export const DELETE_TODO = "DELETE_TODO"

export const addTodo = todo => {
  return {
    type: ADD_TODO,
    todo,
    id: newID++
  }
}

export const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    id
  }
}

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    id
  }
}
