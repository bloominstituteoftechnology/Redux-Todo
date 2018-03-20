export const ADD_TODO = 'ADDTODO';
export const DELETE_TODO = 'DELETETODO';


let nextTodoId = 0;
export const addTodo = (todo) => {
  console.log(todo)
  return {
    type: ADD_TODO,
    text: todo,
    id: nextTodoId++
  }
};

export const removeTodo = (id) => {
  console.log(id)
  return {
    type: DELETE_TODO,
    id
  }
};