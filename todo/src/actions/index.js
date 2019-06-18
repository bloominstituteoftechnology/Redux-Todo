export const ADD_NEW_TASK = 'ADD_NEW_TASK';
export const addNewTask = () => {
  return {
    type: 'ADD_NEW_TASK'
  }
}

export const TOGGLE_TASK = 'TOGGLE_TASK';
export const toggleTask = (id) => {
  return {
    type: 'TOGGLE_TASK',
    id
  }
}