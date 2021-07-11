export const CREATE_TODO = "CREATE_TODO";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";

export const createTodoAction = value => {
  return { type: CREATE_TODO, payload: { value: value, completed: false } };
};

export const toggleCompletedAction = index => {
  return { type: TOGGLE_COMPLETED, payload: { index: index } }
};