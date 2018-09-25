export const ACTIONS = {
  ADD_TODO: "ADD_TODO",
  COMPLETE_TODO: "COMPLETE_TODO",
  DELETE_TODO: "DELETE_TODO"
};

// Add
export const todoAdd = () => ({ type: ACTIONS.ADD_TODO, todo: {} });

// Complete
export const todoComplete = () => ({ type: ACTIONS.COMPLETE_TODO, todo: {} });

// Delete
export const todoDelete = () => ({ type: ACTIONS.DELETE_TODO, todo: {} });
