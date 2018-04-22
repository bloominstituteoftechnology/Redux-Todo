export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const CHECK_TODO = 'CHECK_TODO';

export const addToDo = todo => {
  return { type: ADD_TODO, payload: todo };
};

export const removeToDo = todo => {
  return { type: REMOVE_TODO, payload: '' };
};

export const checkToDo = todo => {
    return { type: CHECK_TODO, payload: ''};
};