
export const reducer = (state = {}, action) => {
  switch(action.type) {
    case 'FETCH_TODOS':
      return action.payload;
    case 'ADD_TODO':
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            value: action.payload,
            completed: false
          }
        ]
      });
    case 'TOGGLE_TODO':
      const changed = state.todos.filter(todo => todo.value === action.payload);
      return Object.assign({}, state, {
        todos: [
          ...state.todos.filter(todo => todo.value !== action.payload),
          {
            value: action.payload,
            completed: !changed[0].completed
          }
        ]
      });
    default:
      return state;
  }
}