import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions';

export const ToDoList = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id !== action.id) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed,
        };
      });
    case DELETE_TODO:
      return state.filter(todo => {
        return todo.id !== action.id;
      });
    default:
      return state;
  }
};

export default ToDoList;
