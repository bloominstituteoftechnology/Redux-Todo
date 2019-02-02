export const ADDTODO = 'ADDTODO';
export const TOGGLECOMPLETE = 'TOGGLECOMPLETE';
export const DELETECOMPLETED = 'DELETECOMPLETED';
export const SAVE = 'SAVE';

export const addToDo = (value, date) => {
  let newTodo = {
    value: value,
    date: date,
    completed: false,
  };

  return {type: ADDTODO, payload: newTodo};
};

export const completedToDo = index => {
  return {type: TOGGLECOMPLETE, index};
};

export const deleteCompleted = () => {
  return {type: DELETECOMPLETED};
};

export const saveToDos = () => {
  return {type: SAVE};
};
