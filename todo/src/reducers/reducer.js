import { ADD_TODO, DELETE_TODO } from "../actions/index.js";

const initial_state = [{ text: "Walk the cat" }, { text: "Feed fish" }];

export default function todo(state = initial_state, action) {
  console.log("lock reducer got this", action.type);
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, id: action.id }];
    case DELETE_TODO:
      return state.filter(todo => todo.id != action.id);
    default:
      return state;
  }
}
