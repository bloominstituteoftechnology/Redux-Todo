export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const addTodo = todo => {
  return {
    type: ADD_TODO,
    newTodo: todo
  };
};

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    id: id
  };
};

export const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    id: id
  };
};
