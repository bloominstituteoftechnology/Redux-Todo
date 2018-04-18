export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

const addTodo = value => {
  return {
    type: "ADD_TODO",
    payload: { value, completed: false }
  }
}

const updateTodo = ({ value, completed }) => ({
  type: UPDATE_TODO,
  payload: { value, completed: !completed }
})

const removeTodo = value => ({
  type: REMOVE_TODO,
  payload: { value }
})

export { addTodo, updateTodo, removeTodo }