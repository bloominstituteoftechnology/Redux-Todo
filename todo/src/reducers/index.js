import { ADD_TODO } from "../actions";
import { TOGGLE_TODO } from "../actions";

const initialState = {
  todos: [
    {
      value: "Walk the dog",
      completed: false
    }
  ]
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, i) =>
          i === action.payload.index
            ? { ...todo, completed: action.payload.completed }
            : todo
        )
      };
    default:
      return state;
  }
};
