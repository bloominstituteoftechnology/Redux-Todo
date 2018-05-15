export const ADD_TODO = "ADD_TODO";
export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";

let todoID = 0;

export const addTodo = text => {
  return {
    type: ADD_TODO,
    payload: {
      todo:text,
      complete: false,
      id: todoID++
    }
  };

};

export const toggleTodo = id => {
  return {
    type: TOGGLE_COMPLETE,
    payload: id
  };
};
