const initialState = {
  todos: [
    {
      value: "Create todo app",
      completed: false
    }
  ]
};

export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TODO": {
      return {
        todos: [...state.todos, { value: action.text, completed: false }]
      };
    }
    default:
      return state;
  }
};
