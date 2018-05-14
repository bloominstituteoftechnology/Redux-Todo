

export default (todos = [], action) => {
  switch (action.type) {
    case ADD_TODO:
    return todos.concat(action.payload);
    case TOGGLE_TODO:
    return todos.map((todo) => {
      if (todo.id === action.payload) {
        return Object.assign({}, todo, {complete: !todo.complete});
      }
      else return todo;
    })
    default:
      return todos;
  }
};
