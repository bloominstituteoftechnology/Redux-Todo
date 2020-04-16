//Action creator
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const CLEAR_TODO = "CLEAR_TODO";

//Named export
export const addTodo = todo => {
  console.log(todo);
  //Return an action
  return {
    type: "ADD_TODO",
    payload: todo
  };
};

export const toggleTodo = id => {
  console.log(id);
  return {
    type: "TOGGLE_TODO",
    payload: id
  };
};

export const clearTodo = id => {
  return {
    type: "CLEAR_TODO",
    payload: id
  };
};
