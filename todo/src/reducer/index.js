const initialState = {
  todos: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [...state.todos, action.payload]
      };

    case "TOGGLE_TODO":
      let update = state.todos.map(item => {
        if (item.id === action.payload) {
          item.completed = !item.completed;
          return item;
        } else {
          return item;
        }
      });

      return {
        todos: update
      };

    default:
      return state;
  }
};
