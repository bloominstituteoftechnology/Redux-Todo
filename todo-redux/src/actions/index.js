// Action Types
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODOS = 'REMOVE_TODOS';
// Action Creators
export const addTodo = todo => {
  return {
    type: ADD_TODO,
    payload: todo
  };
};

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    payload: id
  };
};

export const removeTodos = () => {
  return {
    type: REMOVE_TODOS
  };
};
