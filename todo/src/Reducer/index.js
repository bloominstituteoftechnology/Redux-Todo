import { ADD_NEW_TODO } from "../actions/index";

const initialState = {
  todos: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_TODO:
      const newTodo = { content: action.payload };
      return {
        ...state,
        todos: [...state.todos, newTodo]
      };

    default:
      return state;
  }
};
