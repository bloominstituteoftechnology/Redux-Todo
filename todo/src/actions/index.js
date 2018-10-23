export const ADD_TODO = 'ADD_TODO';

export const addTodo = todo => {
  console.log('inside action', todo);
  return {
    type: ADD_TODO,
    payload: todo
  };
};
