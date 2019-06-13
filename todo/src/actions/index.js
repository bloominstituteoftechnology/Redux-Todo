export const TODO_ADDED = 'TODO_ADDED';
export const TODO_CLICKED = 'TODO_CLICKED';
export const TODO_DELETED = 'TODO_TODO_DELETED';

export const addTodo = (todo) => {
  console.log('add: ', todo);
  return {
    type: TODO_ADDED,
    payload: todo
  };
};

export const clickTodo = (id) => {
  console.log('clicked: ', id);
  return {
    type: TODO_CLICKED,
    payload: id
  };
};

export const deleteTodo = (id) => {
  console.log('deleted: ', id);
  return {
    type: TODO_DELETED,
    payload: id
  };
};