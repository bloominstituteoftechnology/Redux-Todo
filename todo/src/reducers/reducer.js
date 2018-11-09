const initialState = {
  todos: [
    {
      id: 4287569834,
      task: "Organize Garage",
      completed: false
    },
    {
      id: 2345876375,
      task: "Bake Cookies",
      completed: false
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        //push new todo the the array
        todos: [
          ...state.todos,
          {
            id: action.id,
            task: action.task,
            completed: false
          }
        ]
      };
    case "TOGGLE": 
      return state.todos.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return state;
  }
};