export const ADD_TODO = "ADD_TODO";
export const TOGGLE = "TOGGLE";

export function addTodo(newTodo) {
  console.log(newTodo);
  return {
    type: ADD_TODO,
    payload: newTodo
  };
}

export function toggle(todo) {
  return {
    type: TOGGLE,
    payload: !todo.completed
  };
}
