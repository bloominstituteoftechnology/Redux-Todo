export default (todos = [], action) => {
  switch (action.type) {
    case 'NEW_TODO':
      return todos.concat(action.payload);
    default:
      return todos;
  }
};