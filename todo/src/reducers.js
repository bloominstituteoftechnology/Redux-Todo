import { NEW_TODO, COMPLETE_TODO } from "./actions";

const initialState = [

    {
      value: "example todo",
      completed: false,
      id: 0
    }

];

export default (state = initialState, action) => {
  switch (action.type) {
    case NEW_TODO:
      return [
        ...state,
        { value: action.text, completed: false, id: action.id }
      ];

    case COMPLETE_TODO:
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

    default:
      return state;
  }
};
