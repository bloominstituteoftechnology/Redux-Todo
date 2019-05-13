export const NEW_TODO = 'NEW_TODO';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
export const DELETE_TODO = 'DELETE_TODO';

export const addTodo = text => {
  return {
    type: NEW_TODO,
    id: Date.now(),
    text,
  };
};

export const toggleComplete = id => {
  return {
    type: TOGGLE_COMPLETE,
    id,
  };
};

export const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    id,
  };
};
