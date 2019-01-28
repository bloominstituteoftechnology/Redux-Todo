import { ADD_TODO } from "../actions/";

const initialState = {
  todos: [
    {
      value: "Walk dog",
      completed: true
    }
  ]
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          { value: action.payload.value, completed: action.payload.completed }
        ]
      };

    default:
      return state;
  }
};
