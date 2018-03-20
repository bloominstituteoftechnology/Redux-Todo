export const ADD_TODO = 'ADDTODO';
export const DELETE_TODO = 'DELETETODO';


let nextTodoId = 0;
export const addTodo = () => {
  return {
    type: ADD_TODO,
    id: nextTodoId++
  }
};

export const removeTodo = (id) => {
  return {
    type: DELETE_TODO,
    id
  }
};