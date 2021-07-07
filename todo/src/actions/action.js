export const FETCH_TODO = "FETCH_TODO";
export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";
export const DELETE_TODO = "DELETE_TODO";

export const addTodo = todo => {
  console.log(todo, "add");
  return {
    type: FETCH_TODO,
    payload: todo
  };
};

export const toggleComplete = index => {
  console.log(index, "toggle");
  return {
    type: TOGGLE_COMPLETE,
    payload: index
  };
};

export const deleteTodo = () => {
  console.log("fired");
  return {
    type: DELETE_TODO
  };
};
