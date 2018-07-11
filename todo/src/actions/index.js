const ADD_TODO = 'ADD_TODO';
const TOGGLE_COMPLETION = 'TOGGLE_COMPLETION';

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

export { ADD_TODO, addTodo,TOGGLE_COMPLETION, toggleCompletion };