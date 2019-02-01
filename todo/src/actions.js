export const ADD_TODO = "ADD_TODO";

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    newTodo: { value: todo, completed: false}
  }
}