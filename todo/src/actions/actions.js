export const submitTodo = val => {
  return {
    type: 'SUBMIT',
    payload: val
  };
};

export const toggleTodo = val => {
  return {
    type: 'TOGGLE',
    payload: val
  };
}

export const removeTodo = val => {
  return {
    type: 'REMOVE',
    payload: val
  };
}

export const getTodos = todos => {
  return {
    type: 'GET',
    payload: todos
  };
}
