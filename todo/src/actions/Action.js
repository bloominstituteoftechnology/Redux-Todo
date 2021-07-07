export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
export const DELETE_TODOS = 'DELETE_TODOS';

export const addTodo = item => {
  return {
    type: ADD_TODO,
    payload: { value: item.value, completed: item.completed, id: item.id }
  };
};

export const toggleComplete = item => {
  return {
    type: TOGGLE_COMPLETE,
    payload: item
  };
};

export const deleteItems = item => {
  return {
    type: DELETE_TODOS
  };
};
