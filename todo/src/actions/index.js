export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

let id = 0;
export const addTodo = value => {
   return {
     type: ADD_TODO,
     id: id++,
     value,
     completed: false
   };
};

export const removeTodo = id => {
  return {
    type: REMOVE_TODO,
    id
  };
}

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    id
  };
};