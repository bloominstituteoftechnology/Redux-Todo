export const ADD_TODO = 'ADD_TODO';

export const addTodo = item => {
  return {
    type: ADD_TODO,
    payload: { value: item.value, completed: item.completed }
  };
};
