export const add = todo => {
  console.log(todo);
  return {
    type: 'ADD_TODO',
    payload: todo,
  };
};

export const remove = id => {
  console.log(id);
  return {
    type: 'REMOVE_TODO',
    payload: id,
  };
};
