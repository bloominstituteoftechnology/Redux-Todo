export const ADDTODO = "ADDTODO";
export const REMOVETODO = "REMOVETODO";
export const CHECKTODO = "CHECKTODO";

export const addtodo = todo => {
  return { type: ADDTODO, payload: todo };
};

export const removetodo = index => {
  return { type: REMOVETODO, payload: index };
};

export const checktodo = index => {
  return { type: CHECKTODO, payload: index };
};
