const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state, {
          id: action.id,
          value: action.value,
          completed: false
        }
      ];
    case 'TOGGLE_COMPLETE':
      return state.map(todo => {
        if (todo.id === action.id) {
          return {...todo, completed: !todo.completed}
        }
        return todo;
      })
    default: 
      return state;
  }
};

export default todoReducer;