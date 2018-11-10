import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "../actions";


const todos = (state = [], action) => {
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
      return state.map(
        todo => {
          if (todo.id === action.id) {
            return Object.assign(...todo, {completed: !todo.completed})
          }
          return todo;
        }
          // todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case DELETE_TODO:
      return state.filter(todo => !todo.completed);
    default:
      return state;
  }
};

export default todos;