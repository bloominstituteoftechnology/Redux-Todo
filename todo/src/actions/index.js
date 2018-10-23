export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';

export const addTodo = todo => {
  console.log('addTodo action', todo);
  return {
    type: ADD_TODO,
    payload: todo
  };
};

export const toggleCompleted = index => {
  console.log('toggleCompleted action', index);
  return {
    type: TOGGLE_COMPLETED,
    payload: index
  };
};



 