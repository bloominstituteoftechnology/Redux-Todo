export const ADDTODO = 'ADDTODO';
export const TOGGLE = 'TOGGLE';

export const addTodo = () => {
  return {
    type: ADDTODO,
    text
  }
};

export const toggle = () => {
  return {
    type: TOGGLE,
    index
  }
};
