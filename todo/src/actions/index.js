
export const addTodo = (todo) => {
  return {
    type: NEW_TODO,
    payload: todo
  };
};

export const handleDelete = (index) => {
  return {
    type: HANDLE_DELETE,
    payload: index
  };
};

export const NEW_TODO = 'NEW_TODO';
export const HANDLE_DELETE = 'HANDLE_DELETE';