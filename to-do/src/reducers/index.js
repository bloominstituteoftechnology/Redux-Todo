import { ADD_TODO, TOGGLE_TODO } from "../actions";

const initialState = {
  title: {
    text: "Hello Redux World! (I am inside redux)"
  },
  todo: []
};

const titleReducer = (state = initialState, action) => {
  console.log("Inside reducer", action, state);
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todo: [...state.todo, { name: action.payload, completed: false }]
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todo: state.todo.map((todo, index) => {
          if (index === action.payload) {
            return { ...todo, completed: !todo.completed };
          } else {
            return todo;
          }
        })
      };
    //       case DELETE_TODO - Hint use index to find it, use filter to filter it out
    default:
      return state;
  }
};

export default titleReducer;
