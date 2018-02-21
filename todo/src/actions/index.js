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

export const toggle = id => {
  return {
    type: 'TOGGLE_COMPLETE',
    payload: id,
  };
};
