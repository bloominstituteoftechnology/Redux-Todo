import { ADD_TODO, DELETE_TODO } from "../actions";

const initialState = {
  todos: [
    {
      value: "Walk the dog.",
      completed: false
    },
    {
      value: "test",
      completed: false
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { value: action.newTodo }];

    case DELETE_TODO:
      return {
        ...state,
        value: action.deleteTodo
      };
    default:
      return state;
  }
};
