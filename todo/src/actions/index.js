export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';

export const addTodo = todo => {
  console.log('action', todo);
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const toggleCompleted = todo => {
  console.log('action toggle', todo);
  return {
    type: TOGGLE_COMPLETED,
    payload: todo,
  };
};
