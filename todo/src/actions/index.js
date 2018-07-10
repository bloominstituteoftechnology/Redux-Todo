export const HANDLE_INPUT = 'HANDLE_INPUT';
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const handleInput = input => {
  return {
    type: HANDLE_INPUT,
    payload: input
  }
}

export const addTodo = () => {
  return {
    type: ADD_TODO
  }
}

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    payload: id
  }
}

export const deleteTodo = () => {
  return {
    type: DELETE_TODO
  }
}
