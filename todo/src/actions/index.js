export const NEW_TODO = 'NEW_TODO';

export const addTodo = (todo) => {
  return {
    type: NEW_TODO,
    payload: todo
  };
};

