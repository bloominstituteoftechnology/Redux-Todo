export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case 'TOGGLE_TODO':
      return state.map( (todo) => {
        if (todo.id === action.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }
    );
    case 'REMOVE_TODO':
      return [
        ...state.slice(0, action.id),
        ...state.slice(action.id + 1)
      ];

    default:
      return state;
  }
};
