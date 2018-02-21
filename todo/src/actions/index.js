
export const ADDTODO = 'ADDTODO';
export const TOGGLE = 'TOGGLE';

export const addTodo = () => {
  return {
    type: ADDTODO
  }
};

export const toggle = () => {
  return {
    type: TOGGLE
  }
};