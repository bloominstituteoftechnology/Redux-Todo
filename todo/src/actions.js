export const ADD_TODO = "ADD_TODO";
export const STRIKE_TODO = "STRIKE_TODO";
export const DELETE_TODO = "DELETE_TODO";

export const addTodo = text => {
  if (text !== "") {
    let newTodo = {
      task: text,
      complete: false
    };
    return { type: ADD_TODO, payload: newTodo };
  } else {
    return { type: ADD_TODO };
  }
};
export const strikeTodo = id => {
  return { type: STRIKE_TODO, payload: id };
};
export const deleteTodo = _ => {
  return { type: DELETE_TODO };
};
