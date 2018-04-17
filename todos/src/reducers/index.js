export const todoReducers = (todos = [], action) => {
  switch (action.type) {
    case "GET_TODOS":
      return [...todos];
    case "SUBMIT_TODO":
      return todos.concat(action.payload);
    case "TOGGLE_TODO":
      return Object.assign({}, { completed: 'completed' });
    default:
      return todos;
  }
};