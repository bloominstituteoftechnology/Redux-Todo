export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const addTodo = item => {
  return {
    type: ADD_TODO,
    payload: { value: item.value, completed: item.completed, id: item.id }
  };
};

export const deleteTodo = item => {
  return {
    type: DELETE_TODO
  };
};
