export const ADD_TODO = "ADD_TODO";
export const COMPLETED = "COMPLETED";

export const add_todo = todo => {
  return {
    type: "ADD_TODO",
    payload: todo
  };
};
export const completed = () => {};
