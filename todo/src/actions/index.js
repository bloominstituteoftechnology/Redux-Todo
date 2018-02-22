export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
export const REMOVE_TODO = 'REMOVE_TODO';

export const add = todo => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const toggle = id => {
  return {
    type: TOGGLE_COMPLETE,
    payload: id,
  };
};

export const remove = id => {
  return {
    type: REMOVE_TODO,
    payload: id,
  }
}