import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "../actions";

const todos = [
  {
    value: "test todo",
    completed: false,
    id: 0
  }
];
export default (state = todos, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        { value: action.text, completed: false, id: action.id }
      ];
    case TOGGLE_TODO:
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case DELETE_TODO:
      return state.filter(todo => !todo.completed);
    default:
      return state;
  }
};
