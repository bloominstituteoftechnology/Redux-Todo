export const TODO_ADDED = 'TODO_ADDED';
export const TODO_CLICKED = 'TODO_CLICKED';

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