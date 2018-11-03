export const NEWTODO = 'NEWTODO';
export const COMPLETED = 'COMPLETED';
export const DELETED = 'DELETED'

export const newTodo = todo => {
  return { type: NEWTODO, payload: todo}
};

export const completed = (id) => {
   return { type: COMPLETED,payload:id }
};
export const deleted = (id) => {
   return { type: DELETED, payload: id }
};
