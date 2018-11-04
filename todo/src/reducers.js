import { NEW_TODO, COMPLETE_TODO, DELETE_TODO, DELETE_COMPLETED, CLEAR_ALL } from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case NEW_TODO:
      return [
        ...state,
        { value: action.text, completed: false, id: state.length + 1 }
      ];

    case COMPLETE_TODO:
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

    case DELETE_TODO:
        return state.filter(todo => todo.id !== action.id)

    case DELETE_COMPLETED:
        return state.filter(todo => todo.completed === false)

    case CLEAR_ALL:
        return initialState
        
    default:
      return state;
  }
};
