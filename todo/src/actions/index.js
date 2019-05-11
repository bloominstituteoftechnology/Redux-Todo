const ADD_TODO = "ADD_TODO";
const UPDATE_TODO = "UPDATE_TODO";

export const addToDo = (text) => {
  return {
    type: "ADD_TODO",
    payload: text
  };
};

export const updateToDo = (complete) => {
  return {
    type: "UPDATE_TODO",
    payload: complete
  };
};