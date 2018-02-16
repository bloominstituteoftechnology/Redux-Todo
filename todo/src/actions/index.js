let todoId = 0;

export const addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    id: todoId ++,
    payload: todo,
  };
};

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export default addTodo;