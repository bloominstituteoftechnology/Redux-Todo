export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_FIELD = 'UPDATE_FIELD';


let todoId = 0;
export const add = (text) => {
  return {
    type: ADD_TODO,
    payload: {
      id: todoId++,
      text: text,
      complete: false
    }
  };
};

export const toggle = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: id
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id
  };
};

export const updateField = (string) => {
  return {
    type: UPDATE_FIELD,
    payload: string
  };
};
