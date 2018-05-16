export const ADDTODO = 'ADDTODO';
export const TOGGLE = 'TOGGLE';

export function addTodo(text) {
  return {
    type: ADDTODO,
    payload: text
  }
};

export function toggle(index) {
  return {
    type: TOGGLE,
    payload: index
  }
};