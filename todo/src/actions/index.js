export const ADD_TODO = 'ADD_TODO';
export const SELECT_TODO = 'SELECT_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const DELETE_COMPLETED = 'DELETE_COMPLETED';

// Adds a new todo to the list
export const addTodo = newTodo => {
  return {
    type: ADD_TODO,
    payload: newTodo
  };
};

// Toggles completed on the todos
export const selectTodo = index => {
  return {
    type: SELECT_TODO,
    payload: index
  };
};

export const deleteTodo = index => {
  return {
    type: DELETE_TODO,
    payload: index
  };
};

export const deleteCompleted = () => {
  return {
    type: DELETE_COMPLETED
  };
};
