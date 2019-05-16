export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const DELETE_COMPLETED_TODOS = 'DELETE_COMPLETED_TODOS';
export const DELETE_TODO = 'DELETE_TODO';

export const addTodo = todo => {
  return {
    type: ADD_TODO,
    payload: todo // payload obj
  };
};

export const completeTodo = todoId => {
  return {
    type: COMPLETE_TODO,
    payload: todoId
  };
};

export const deleteCompletedTodos = () => {
  return {
    type: DELETE_COMPLETED_TODOS,
  };
};

export const deleteTodo = (todoId) => {
  return {
    type: DELETE_TODO,
    payload: todoId
  };
};