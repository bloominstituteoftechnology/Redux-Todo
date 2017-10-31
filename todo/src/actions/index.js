
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    payload: text,
  };
};
