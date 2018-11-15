import { ADD_TODO, TOGGLE_TODO } from "../actions";

const initialState = {
  todos: [
    {
      value: "test todo",
      completed: false
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(
          (todo, index) => {
            if (index === action.payload) {
              return { ...todo, completed: !todo.completd };
            } else {
              return todo;
            }
          }
            // index === action.payload
            //   ? { ...todo, completed: !todo.completed }
            //   : todo
        )
      };

    default:
      return state;
  }
};
