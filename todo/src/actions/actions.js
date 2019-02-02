export const ADD_TODO = "ADD_TODO";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";
export const REMOVE_TODO = "TOGGLE_COMPLETED";

export function addTodo(todos, todo) {
  return {
    type: ADD_TODO,
    payload: [...todos, todo]
  };
}

export function toggleCompleted(todos, index) {
  //get a copy
  let modifed = todos.slice();
  //toggle completed
  modifed[index].completed = !modifed[index].completed;

  return {
    type: TOGGLE_COMPLETED,
    payload: modifed
  };
}

export function removeTodo(index) {
  return {
    type: TOGGLE_COMPLETED,
    payload: index
  };
}
