export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';

export const ADD_TODO = todo => {
  return { type: ADD_TODO, payload: todo };
};

export const COMPLETE_TODO = id => {
  return { type: COMPLETE_TODO, payload: id };
};