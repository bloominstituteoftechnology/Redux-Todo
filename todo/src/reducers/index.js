import { ADD, REMOVE, PREPARE } from "../actions";

const initialState = {
  todos: [{ value: "default", remove: false }]
};

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      console.log(action.payload);
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.payload.id,
            value: action.payload.value,
            remove: false
          }
        ]
      };

    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.remove != true)
      };
    case PREPARE:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            return { ...todo, remove: !todo.remove };
          } else {
            return todo;
          }
        })
      };
    default:
      return state;
  }
};
