export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const NEW_INPUT = 'NEW_INPUT';
export const UPDATE_STORAGE = 'UPDATE_STORAGE';

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    todo
  }
};

export const deleteTodo = (index) => {
  return {
    type: DELETE_TODO,
    index
  }
}

export const toggleTodo = (index) => {
  return {
    type: TOGGLE_TODO,
    index
  }
}

export const updateNewInput = (input) => {
  return {
    type: NEW_INPUT,
    input
  }  
};


// export const updateLocalStorage = () => {
//   return {
//     type: UPDATE_STORAGE
//   }
// };