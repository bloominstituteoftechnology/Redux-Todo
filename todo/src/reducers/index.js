// Action imports
import { ADD_TODO, SELECT_TODO } from '../actions';

const initialState = {
  // Sets initial state for Redux
  todos: []
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    // Will add a new todo to list
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { value: action.payload, completed: false }]
      };
    // Toggles complete on the todos
    case SELECT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, index) => {
          if (index === action.payload) {
            return { ...todo, completed: !todo.completed };
          } else {
            return todo;
          }
        })
      };
    default:
      return state;
  }
};

export default todoReducer;
