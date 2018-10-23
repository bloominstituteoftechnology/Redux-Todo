export const ADD_TODO = 'ADD_TODO';
export const SELECT_TODO = 'SELECT_TODO';

// Adds a new todo to the list
export const addTodo = newTodo => {
  return {
    type: 'ADD_TODO',
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
