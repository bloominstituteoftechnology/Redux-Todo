export const ADD = "ADD";
export const COMPLETE = "COMPLETE";
export const DELETE = "DELETE"

export const addNewTodo = newTodo => ({
  type: ADD,
  payload: newTodo
});

export const completeTodo = id => ({
  type: COMPLETE,
  payload: id
});

export const deleteTodo = id => ({
  type: DELETE,
  payload: id
})
