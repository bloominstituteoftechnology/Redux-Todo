export const addTodo = (todo) => {
  return {
    type: 'NEW_TODO',
    payload: todo
  };
};