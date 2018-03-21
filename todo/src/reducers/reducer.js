import { ADD_TODO, DELETE_TODO, COMPLETE_TODO } from "../actions/index.js";

export default function todo(state = [], action) {
  console.log("lock reducer got this", action.type);
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, id: action.id, complete: false }];
    case DELETE_TODO:
      return state.slice().filter(todo => todo.id !== action.id);
    case COMPLETE_TODO:
      return state.slice().map(todo => {
        if (todo.id === action.id) {
          todo.complete = !todo.complete;
        }
        return todo;
      });
    default:
      return state;
  }
}
