export const ADD_TODO = 'ADD_TODO';

export const addToDo = (payload) => {
  return { type: ADD_TODO, payload: payload };
};
