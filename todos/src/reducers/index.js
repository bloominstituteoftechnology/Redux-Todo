import {ADD_TODO, TOGGLE_COMPLETED} from "../actions";

const initialState = {todos: []};

const todoReducer = (state = initialState, action) => {
  console.log("REDUCER", state, action);
  switch (action.type) {
    case ADD_TODO:
      console.log("Original State: ", state);
      return {
        ...state,
        todos: [...state.todos, {value: action.payload, completed: false}]
      };
    case TOGGLE_COMPLETED:
      return {
        todos: state.todos.map((todo, index) => {
          console.log("Original State: ", state);
          if (index === action.payload) {
            todo.completed = !todo.completed;
          }
          return todo;
        })
      };
    default:
      console.log("Original State: ", state);
      return state;
  }
};

export default todoReducer;
