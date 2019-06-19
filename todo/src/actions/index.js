export const HANDLE_CHANGE = "HANDLE_CHANGE";
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";
export const DELETE_TODO = "DELETE_TODO";
 export const handleChange = e => {
  return {
    type: HANDLE_CHANGE,
    payload: e.target.value
  };
};
 export const addTodo = (e, todo) => {
  e.preventDefault();
  return {
    type: ADD_TODO,
    payload: todo
  };
};
 export const toggleComplete = (value, completed, id) => {
  console.log("action toggled");
  return {
    type: TOGGLE_COMPLETE,
    payload: completed,
    value: value,
    id: id
  };
};
 export const deleteTodo = (e, id) => {
  e.stopPropagation();
  return {
    type: DELETE_TODO,
    payload: id
  };
};