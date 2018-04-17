import { ADD_TODO, DELETE_TODO } from "../actions";

export default (todos = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...todos,
        {
          //   id: action.id,
          value: action.value,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return todos.map(
        todo =>
          todo.id === action.id ? { ...todo, compelted: !todo.completed } : todo
      );
    default:
      return todos;
  }
};
