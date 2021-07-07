import { types } from '../actions';

const { ADD_TODO, TOGGLE_TODO, DELETE_TODO } = types;

const todos = (todos = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...todos, { id: action.id, text: action.text, completed: false }];
    case TOGGLE_TODO:
      return todos.map(todo => (
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      ));
    case DELETE_TODO:
      return todos.filter(({ id }) => id !== action.id);
    default:
      return todos;
  }
};

export default todos;
