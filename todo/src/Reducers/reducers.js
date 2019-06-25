import {
    ADD_TODO,
    TOGGLE_COMPLETE,
    REMOVE_TODO,
} from '../Actions/actionTypes'

export function todoReducer(state = [], action) {
    switch (action.type) {
      case ADD_TODO:
        return [...state, action.payload];
      case REMOVE_TODO: // Stretch task!
        return state;
      case TOGGLE_COMPLETE:
        return state.map(todo => {
          if (todo.id === action.payload) {
            todo.completed = !todo.completed;
            return todo;
          }
          return todo;
        });
      default:
        return state;
    }
  }