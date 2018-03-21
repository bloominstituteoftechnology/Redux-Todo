import { ADD_TODO, TOGGLE_COMPLETE } from "../actions";

export default (todo = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      return [
        ...todo,
        { id: todo.length, value: action.payload, completed: false }
      ];
    case TOGGLE_COMPLETE:
      console.log("toggle", todo);
      return todo.map(item => {
        if (Number(item.id) === Number(action.id)) {
          return { ...item, completed: !item.completed };
        } else {
          return item;
        }
      });

    default:
      return todo;
  }
};
