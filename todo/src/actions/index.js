export const ADDTODO = 'ADDTODO';
export const TOGGLE = 'TOGGLE';

export function addTodo(text) {
  return {
    type: ADDTODO,
    text
  }
};

export function toggle(index) {
  return {
    type: TOGGLE,
    index
  }
};
