import { ADD_TODO } from "../actions";

const initialState = {
  todos: [{ text: "Clean room", completed: false, id: 0 }]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    default:
      return state;
  }
};
