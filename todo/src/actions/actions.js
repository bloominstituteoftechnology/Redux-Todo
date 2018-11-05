export let newID = 1
export const ADD_TODO = "ADD_TODO"

export const addTodo = todo => {
  return {
    type: ADD_TODO,
    todo,
    id: newID++
  }
}
