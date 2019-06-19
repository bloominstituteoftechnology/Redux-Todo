export const ADD_NEW_TASK = 'ADD_NEW_TASK';
export const addNewTask = (newTask) => {
  return {
    type: 'ADD_NEW_TASK',
    payload: newTask
  }
}

export const TOGGLE_TASK = 'TOGGLE_TASK';
export const toggleTask = (index) => {
  return {
    type: 'TOGGLE_TASK',
    payload: index
  }
}