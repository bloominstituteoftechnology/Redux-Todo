import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "../actions";

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          return Object.assign(...todo, { completed: !todo.completed });
        }
        return state;
      });
    case DELETE_TODO:
      return state.filter(todo => !todo.completed);
    default:
      return state;
  }
};

export default todoReducer;
