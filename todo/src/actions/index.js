export const ADDTODO = "ADDTODO";
export const REMOVETODO = "REMOVETODO";
export const CHECKTODO = "CHECKTODO";

export const addTodo = todo => {
  return { type: ADDTODO, payload: todo };
};

export const removeTodo = index => {
  return { type: REMOVETODO, payload: index };
};

export const checkTodo = index => {
  return { type: CHECKTODO, payload: index };
};
