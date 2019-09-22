export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const addToDo = todo => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const toggleToDo = todo => {
  return {
    type: TOGGLE_TODO,
    id: todo.id,
  };
};

export const deleteToDo = todo => {
  return {
    type: DELETE_TODO,
    id: todo.id,
  };
};
