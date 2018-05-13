export const ADD = 'ADD';
export const HANDLE_CHANGE = 'HANDLE_CHANGE';
export const COMPLETE = 'COMPLETE';
export const REMOVE = 'REMOVE';

export const add = (value) => {
  return {
    type: ADD, 
    value
  }
};

export const handleChange = (input) => {
  return {
    type: HANDLE_CHANGE,
    input
  }
}

export const complete = (index) => {
  return {
    type: COMPLETE,
    index
  }
}

export const remove = (index) => {
  return {
    type: REMOVE,
    index
  }
}