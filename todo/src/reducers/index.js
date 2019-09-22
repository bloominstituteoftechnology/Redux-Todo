import { ADD_TODO } from '../actions';
import { TOGGLE_COMPLETE } from '../actions';
import { REMOVE_TODO } from '../actions';

export default (todos = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...todos, action.payload];

    case TOGGLE_COMPLETE:
      const copyTodo = todos.map(todo => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return copyTodo;

    case REMOVE_TODO:
      const newTodo = todos.filter(x => x.id !== action.payload);
      return newTodo;

    default:
      return todos;
  }
};
