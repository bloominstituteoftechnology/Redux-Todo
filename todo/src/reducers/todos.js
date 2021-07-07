import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODOS,
  GET_TODOS,
  DELETE_TODO
} from "../actions";

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.payload
          ? Object.assign({}, todo, { completed: !todo.completed })
          : todo
      );
    case REMOVE_TODOS:
      return state.filter(todo => !todo.completed);
    case GET_TODOS:
      return action.payload;
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
};

export default todos;
