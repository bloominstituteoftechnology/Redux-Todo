export const ADD_TODO = 'ADD_TODO';

export const addTodo = newTodo => {
  return {
    type: 'ADD_TODO',
    payload: newTodo
  };
};

export const selectTodo = todoIndex => {
  return console.log('hello');
  // return {
  //   type: 'SELECT_TODO',
  //   payload: todoIndex
  // };
};
