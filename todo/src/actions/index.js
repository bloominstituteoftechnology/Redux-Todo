export const ADD = 'ADD';
export const HANDLE_CHANGE = 'HANDLE_CHANGE';

export const add = (todo) => {
  return {
    type: ADD, 
    todo
  }
};

export const handleChange = (input) => {
  return {
    type: HANDLE_CHANGE,
    input
  }
}