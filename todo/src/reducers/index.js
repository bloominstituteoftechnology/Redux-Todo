import { ADD_TODO, TOGGLE_TODO } from "../actions";

// One reducer function to accept 2 action cases: ADD_TODO, TOGGLE_TODO
// Receives state from Redux store

export default (todos = [], action) => {
  switch (action.type) {
    // Case ADD_TODO: adds new todo item to state
    case ADD_TODO:
      return [
        ...todos,
        {
          id: action.id,
          value: action.value,
          completed: false
        }
      ];

    // Case TOGGLE_TODO: toggle todo item 'completed' (strikethrough?)
    case TOGGLE_TODO:
      return todos.map(
        todo =>
          todo.id === action.id ? { ...todo, compelted: !todo.completed } : todo
      );

    // default case
    default:
      return todos;
  }
};
