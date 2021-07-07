export const ADD_TASK = 'ADD_TASK';

export const addTask = (todo) => {
    return { 
      type: 'ADD_TASK',
      todo
    } 
  };
  