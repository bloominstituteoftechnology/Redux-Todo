export const ADD_TODO = 'ADD_TODO';

export function addTodo(text){
  let newTodo = {
    name: text,
    complete: false
  };


  return { type: ADD_TODO, payload: newTodo };
}
