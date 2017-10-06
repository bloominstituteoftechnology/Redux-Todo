let nextTodoId = 0;

export const addTodo = ({description = '', completed = false, id = ++nextTodoId} = {}) => ({
  type: 'ADD_TODO',
  todo: {
    description,
    completed,
    id
  }
});

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id
});