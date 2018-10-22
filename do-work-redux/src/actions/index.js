export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
export const ADD_TASK = 'ADD_TASK';

export const toggleComplete = id => {
  return {
    type: TOGGLE_COMPLETE,
    payload: id
  };
};

export const addTask = task => {
  return {
    type: ADD_TASK,
    payload: task
  };
};
