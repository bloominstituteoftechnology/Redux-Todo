import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../actions';

const todos = (todos = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...todos,
        {
          id: action.id,
          value: action.value,
          completed: action.completed
        }
      ];
    case REMOVE_TODO:
      return todos.filter(todo => todo.id !== action.id);
    case TOGGLE_TODO:
      return todos.map(todo =>
        (todo.id === action.id) ? Object.assign({}, todo, {completed: !todo.completed}) : todo
      );
    default:
      return todos;
  }
};

export default todos;