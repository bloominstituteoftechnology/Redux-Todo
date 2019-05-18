export const COMPLETE_TODO = 'COMPLETE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const completeTodo = (todoValue) => {
  return {
    type: COMPLETE_TODO,
    payload: todoValue
  }
}

export const deleteTodo = (todoValue) => {
  return {
    type: COMPLETE_TODO,
    payload: todoValue
  }
}
