// export const ADD_TODO = 'ADD_TODO';
// export const MARK_DONE = 'MARK_DONE';

export const addTodo = todo => {
  return {
    type: 'ADD_TODO',
    payload: todo,
  };
};

export const markDone = id => {
  return {
    type: 'MARK_DONE',
  };
};

export const handleInput = input => {
  return {
    type: 'HANDLE_INPUT',
    payload: input,
  };
};
