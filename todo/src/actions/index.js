export const ADD = "ADD";
export const COMPLETE = "COMPLETE";

export const add = (newTodo) => {
  return {
    type: ADD,
    payload: newTodo,
    };
};

export const complete = (i) => {
  return {
    type: COMPLETE,
    target: i,
    };
};