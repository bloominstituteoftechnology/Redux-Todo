export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        // break out the individual objects that are currently in the state array
        ...state,
        // add new todo to the end of the array
        {
          id: state.length,
          value: action.value,
          completed: false
        }
      ];
    case 'TOGGLE_TODO':
      return state.map((todo) => {
        if (todo.id === action.id) { 
          todo.completed = !todo.completed; 
        }
        return todo;
      });
    case 'DELETE_TODO':
      return state.reduce((updated, todo) => {
        if (todo.id !== action.id) {
          updated.push({
            id: updated.length,
            value: todo.value,
            completed: todo.completed
          });
        }
        return updated;
      }, []);
    default: 
      return state;
  }
};