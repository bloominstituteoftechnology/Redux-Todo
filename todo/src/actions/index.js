export const ADD_TODO_ITEM = 'ADD_TODO_ITEM';
export const MARK_COMPLETE = 'MARK_COMPLETE';

export const addTodoItem = (todo) => {
  return {
    type: ADD_TODO_ITEM,
    payload: todo,
  };
};

export const markComplete = (id) => {
  return {
    type: MARK_COMPLETE,
    payload: id,
  };
};