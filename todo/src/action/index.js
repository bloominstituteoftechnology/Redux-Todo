export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';


let nextId = 0;

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    text: todo,
    id: ++nextId,
  }
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id
  }
};