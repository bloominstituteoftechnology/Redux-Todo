export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
export const DELETE_ITEM = 'DELETE_ITEM';

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

export const deleteItem = id => {
  console.log('delete action', id);
  return {
    type: DELETE_ITEM,
    payload: id,
  };
};
