const todoReducer = (state = [{
          id: 0,
          text: 'Something something something darkside',
          completed: false}], action) => {
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