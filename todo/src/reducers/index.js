export const ADD_TODO = "ADD_TODO";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";

const initState = {
  todos: [
    {
      value: "Walk the dog.",
      completed: false
    }
  ]
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { value: action.payload, completed: false }]
      };

    case TOGGLE_COMPLETED:
      return {
        ...state,
        todos: state.todos.map((todo, index) => {
          if (index === action.payload) {
            return { ...todo, completed: !todo.completed };
          } else {
            return todo;
          }
        })
      };

    default:
      return state;
  }
};

export default reducer;
