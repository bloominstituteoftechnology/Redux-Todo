export const ADD = 'ADD';
export const COMPLETE = 'COMPLETE';

export const add = (payload) => {
  return {type: ADD, payload:  payload }
};

export const complete = (payload) => {
  return {type: COMPLETE,  payload: payload }
};
