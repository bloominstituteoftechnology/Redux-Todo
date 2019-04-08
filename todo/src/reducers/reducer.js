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
      console.log(action.payload);
      return {
        ...state,
        todos: [...state.todos, action.payload]
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
    case TOGGLE_COMPLETED:
      const index = action.payload;
      //get a copy
      let modifed = state.todos.slice();
      //toggle completed
      modifed[index].completed = !modifed[index].completed;
      return {
        ...state,
        todos: modifed
      };
    default:
      return state;
  }
}

export default reducer;
