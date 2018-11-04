export const ADD_TODO_ACTION = 'ADD_TODO_ACTION'

let todoId=0;
export const addTodoAction = text => ({
  type: 'ADD_TODO_ACTION',
  id: todoId++,
  payload: {text:text}
})
