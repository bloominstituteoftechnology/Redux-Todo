// export const ADD_TODO = 'ADD_TODO';
// export const MARK_DONE = 'MARK_DONE';

export const addTodo = () => {
  return {
    type: 'ADD_TODO',
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
