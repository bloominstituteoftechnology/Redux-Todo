export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';




let todoID = 0

export const add = (task) => ({
  type: ADD_TODO,
  id: todoID++,
  task
});

export const complete = (id) => ({
  type: COMPLETE_TODO,
  id
});

