export const ADD_TODO = "ADD_TODO";

export function addTodo(todos, todo) {
  return {
    type: ADD_TODO,
    payload: [...todos, todo]
  };
}
