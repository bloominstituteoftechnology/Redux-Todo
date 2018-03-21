import { ADD, COMPLETE } from '../actions';

export default function todo(state = [], action) {
  switch (action.type) {
    case ADD:
      console.log('add');
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case COMPLETE:
      console.log('completed', action.id);
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
}
