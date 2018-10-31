import { ADD_TODO, TOGGLE_TODO, REMOVE_TODOS, GET_TODOS } from '../actions';

const initialState = {
  todos: [],
}

export default (state = initialState.todos, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case TOGGLE_TODO:
      return state.map(todo => {
        return todo.id === action.payload 
        ? { ...todo, completed: !todo.completed }
        : todo;
      });
    case REMOVE_TODOS:
      return state.filter(todo => !todo.completed);
    case GET_TODOS:
      return action.payload;
    default:
      return state;
  }
};