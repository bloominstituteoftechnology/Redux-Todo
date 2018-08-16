
export default (todos = [], action) => {
  switch (action.type) {
    case 'SUBMIT':
      return [...todos, action.payload];
    case 'TOGGLE':
      return todos.map(todo => {
        if (todo.id === action.payload) {
          return {...todo, completed: !todo.completed };
        }
        return todo;
      });
    case 'REMOVE':
      return todos.filter(todo => todo.id !== action.payload);
    case 'GET':
      return action.payload;
    default:
      return todos;

  }
}
