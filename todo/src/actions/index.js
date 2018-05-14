export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';


let todoId = 0;
export const add = (text) => {
  return {
    type: ADD_TODO,
    payload: {
      id: todoId++,
      text: text,
      completed: false
    }
  };
};

export const toggle = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: id
  };
};
