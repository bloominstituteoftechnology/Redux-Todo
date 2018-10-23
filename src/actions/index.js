export const COMPLETE_TODO = 'COMPLETE_TODO';


export const completeTodo = (todoValue) => {
  return {
    type: COMPLETE_TODO,
    payload: todoValue
  }
}