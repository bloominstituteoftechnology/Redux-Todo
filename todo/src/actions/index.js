export const ADDTODO = 'ADDTODO';
export const TOGGLE = 'TOGGLE';

export const addTodo = text => {
  return {
    type: ADDTODO,
    payload: text
  }
};

export const toggle = id => {
  return {
    type: TOGGLE,
    payload: id
  }
};