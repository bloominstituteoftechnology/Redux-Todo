const ADDTODO = 'ADDTODO';
const REMOVETODO = 'REMOVETODO';

export const addToDo = () => {
  return { type: ADDTODO, payload: '' };
};

export const removeToDo = () => {
  return { type: REMOVETODO, payload: '' };
};
