const ADD_TODO = 'ADD_TODO';
const TOGGLE_COMPLETION = 'TOGGLE_COMPLETION';
const REMOVE_TODO = 'REMOVE_TODO';

const addTodo = (inputVal) => {
  return {
    type: ADD_TODO,
    payload: inputVal
  };
}

const toggleCompletion = (todoId) => {
  return {
    type: TOGGLE_COMPLETION,
    payload: todoId
  };
}

const removeTodoItem = (todoId) => {
  return {
    type: REMOVE_TODO,
    payload: todoId
  };
}

export { ADD_TODO, addTodo,TOGGLE_COMPLETION, toggleCompletion, REMOVE_TODO,  removeTodoItem };