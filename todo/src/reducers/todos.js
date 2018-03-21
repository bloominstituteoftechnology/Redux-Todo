import { ADD_TODO } from "../actions";

export default (todo = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      return [
        ...todo,
        { id: action.id, value: action.payload, completed: false }
      ];
    case "TOGGLE_COMPLETED":
      return todo.map(item => {
        if (item.id === action.id) {
          return { ...item, completed: !item.completed };
        } else {
          return item;
        }
      });

    default:
      return todo;
  }
};
