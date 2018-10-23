export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';

export const addTodo = todoText => {
  console.log('addTodo action', todoText);
  return {
    type: ADD_TODO,
    payload: todoText
  };
};

export const toggleCompleted = index => {
  console.log('toggleCompleted action', index);
  return {
    type: TOGGLE_COMPLETED,
    payload: index
  };
};



 