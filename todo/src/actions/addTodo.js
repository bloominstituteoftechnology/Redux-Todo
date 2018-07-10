export const ADD_TODO = 'ADD_TODO'
// text goes  in here
let todoId = 1
export const addTodo = (newTodo) => {
  return {
    type: ADD_TODO,
    payload: {
      id: todoId++,
      value: newTodo,
      completed: false
    }
  }
}
