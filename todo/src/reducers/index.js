export const initialState = {
  todos: localStorage.getItem("todoList") === null
    ? [
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
    : JSON.parse(localStorage.getItem("todoList"))
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            task: action.payload,
            id: Date.now(),
            completed: false
          }
        ]
      };
    case "COMPLETE":
      return {
        ...state,
        todos: state.todos.map(
          todo =>
            todo.id === action.payload
              ? { ...todo, completed: !todo.completed }
              : todo
        )
      };
    case "DELETE":
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    default:
      return state;
  }
};

export default rootReducer;
