export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export function addTodo(text){
  let newTodo = {
    name: text,
    complete: false
  };
  return { type: ADD_TODO, payload: newTodo };
}

export function deleteTodo(name){
  return {
    type: DELETE_TODO,
    name 
  }
}
