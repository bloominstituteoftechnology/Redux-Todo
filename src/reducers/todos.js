export default (state=[], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.message,
          completed: false
        }
      ];
      case 'TOGGLE_TODO':
        return state.map(todo => {
          if (todo.id !== action.id) {
            return todo;
          }
          return {
            ...todo,
            completed: !todo.completed
          };
        });
      case 'DELETE_TODO':
        // const newState = []
        // state.map(todo => {if (todo.id !== action.id) newState.push(todo)})
        // return newState
        return state.filter(todo => todo.id !== action.id)
      default:
        return state;
  }
}