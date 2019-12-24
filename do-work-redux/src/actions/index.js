// Action Types
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const DELETE_TASKS = 'DELETE_TASKS';
export const FILTER_TASKS = 'VISIBILITY_FILTER';

// Action Creators
export const toggleComplete = id => {
  return {
    type: TOGGLE_COMPLETE,
    payload: id
  };
};

export const addTask = task => {
  return {
    type: ADD_TASK,
    payload: {
      id: Date.now(),
      task: task,
      completed: false
    }
  };
};

export const deleteTask = id => {
  return {
    type: DELETE_TASK,
    payload: id
  };
};

export const deleteTasks = () => {
  return {
    type: DELETE_TASKS
  };
};

export const filterTasks = filter => {
  return {
    type: FILTER_TASKS,
    action: filter
  };
};
