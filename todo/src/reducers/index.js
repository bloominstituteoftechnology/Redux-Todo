export const initialState = {
  todos: [
    {
      task: "Organize Garage",
      id: 1528817077286,
      completed: false
    },
    {
      task: "Bake Cookies",
      id: 1528817084358,
      completed: false
    }
  ]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        todo: [
          ...state.todo,
          {
            value: action.payload,
            completed: false,
            id: Date.now()
          }
        ]
      };
    case "COMPLETE":
      return state.todos.map(
        todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
      );

    default:
      return state;
  }
};

export default rootReducer;
