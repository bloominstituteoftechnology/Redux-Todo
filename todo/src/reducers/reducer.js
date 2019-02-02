import { ADD_TODO, TOGGLE_COMPLETED, REMOVE_TODO } from "../actions/actions";

const initialState = {
  todos: [
    {
      value: "Walk the dog.",
      completed: false
    }
  ]
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: action.payload
      };
    case TOGGLE_COMPLETED:
      console.log(action.payload);
      return {
        ...state,
        todos: action.payload
      };
    case REMOVE_TODO:
      console.log(action.payload);
      const todos = state.todos.slice();
      return {
        ...state,
        todos: [
          ...todos.slice(0, action.payload),
          ...todos.slice(action.payload + 1)
        ]
      };
    default:
      return state;
  }
}

export default reducer;
