import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  TOGGLE_STATUS,
} from '../actions';

const initialState = [{
  value: 'Morning walk',
  completed: false
}]

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: 
      return [ ...state, action.payload ];
    case DELETE_TODO:
      return state.filter((todo, id) => id !== action.payload);
    case UPDATE_TODO:
      return state.map((todo, id) => {
        if (id === action.payload.id) return action.payload.todo;
        return todo;
      });
    case TOGGLE_STATUS:
      return state.map((todo,id) => {
        if (id === action.payload) return { ...todo, completed: !todo.completed};
        return todo;
      });
    default:
      return state;
  }
}