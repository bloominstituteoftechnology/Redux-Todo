export const NEW_TASK = 'NEW_TASK';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';

export const addTask = (task) => {
  return {
    type: NEW_TASK,
    payload: task
  };
};