export const ADDTODO = 'ADDTODO';
export const TOGGLECOMPLETED = 'TOGGLECOMPLETED';

export const addTodo = () => {
  return {
    type: ADDTODO
  }
};

export const toggleCompleted = () => {
  return {
    type: TOGGLECOMPLETED
  }
};