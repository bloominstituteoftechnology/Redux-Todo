export const CREATE_TODO = "CREATE_TODO";

export const createTodoAction = todo => {
  return { type: CREATE_TODO, payload: { value: todo, completed: false } };
};