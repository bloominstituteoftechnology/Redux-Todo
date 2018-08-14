export const ADD_TODO = 'ADD_TODO';
export const DEL_TODO = 'DEL_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const FILTER_TODO = 'FILTER_TODO';

let id = 0;

export const addTodo = (textInput) => ({
  type: ADD_TODO,
  todo: {
    id: id++,
    text: textInput,
    isCompleted: false
  }
})

export const delTodo = (todoId) => ({
  type: DEL_TODO,
  todo: {
    id: todoId
  }
})

export const toggleTodo = (todoId) => ({
  type: TOGGLE_TODO,
  todo: {
    id: todoId
  }
})

export const filterTodo = () => ({
  type: FILTER_TODO,
})