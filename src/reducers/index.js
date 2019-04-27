import { ADD_TODO, TOGGLE_COMPLETED, DELETE_TODO, CLEAR_COMPLETED } from "../actions";

const initialState = {
  todos: [
    {
      value: "Walk the dog",
      completed: false
    }
  ]
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          {
            value: action.payload,
            completed: false
          }
        ]
      };
    case TOGGLE_COMPLETED:
      return {
        todos: state.todos.map((todo, index) => {
          if (index === action.payload) {
            return { ...todo, completed: !todo.completed };
          } else {
            return todo;
          }
        })
      };
    case DELETE_TODO:
      return {
        todos: state.todos.filter((todo, index) => {
          if (index !== action.payload) {
            return todo;
          }
          return null;
        })
      };
    case CLEAR_COMPLETED:
      return {
          todos: state.todos.filter(todo => {
              return todo.completed === false;
          })
      }
    default:
      return state;
  }
};

export default todoReducer;
