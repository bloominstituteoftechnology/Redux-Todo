export default (todos=[], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...todos,
        {
          id: Date.now(),
          value: action.value,
          completed: false
        }
      ];
    case 'TOGGLE_COMPLETED':
      return todos.map(todo => {
        if (todo.id === action.id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        } else return todo
      });
    case 'DELETE_TODO':
      return todos.filter(todo => todo.id !== action.id);
    default:
      return todos;
  }
}
