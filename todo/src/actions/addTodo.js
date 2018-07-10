export const TODO_ADDED = 'TODO_ADDED';

export const addTodo = (todo) => {
  console.log('add: ', todo);
  return {
    type: TODO_ADDED,
    payload: todo
  };
};