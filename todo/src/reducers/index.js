import { ADD, DELETE } from "../actions";

export default (todos = [], action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...todos,
        {
          //   id: action.id,
          value: action.value,
          completed: false
        }
      ];
    case "TOGGLE":
      return todos.map(
        todo =>
          todo.id === action.id ? { ...todo, compelted: !todo.completed } : todo
      );
    default:
      return todos;
  }
};
