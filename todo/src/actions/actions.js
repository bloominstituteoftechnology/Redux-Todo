let todoId = 0;
export const Add = task => {
  return {
    type: "ADD",
    id: todoId++,
    task
  };
};

export const Toggle = id => {
  return {
    type: "TOGGLE",
    id
  };
};