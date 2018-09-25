export const ACTIONS = {
  ADD_TODO: "ADD_TODO",
  COMPLETE_TODO: "COMPLETE_TODO",
  DELETE_TODO: "DELETE_TODO"
};

// Add
export const todoAdd = text => ({ type: ACTIONS.ADD_TODO, text: text });

// Complete
export const todoComplete = text => ({ type: ACTIONS.COMPLETE_TODO });

// Delete
export const todoDelete = text => ({ type: ACTIONS.DELETE_TODO });
