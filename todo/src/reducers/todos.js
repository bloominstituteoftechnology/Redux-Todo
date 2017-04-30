import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions';
import { v4 } from 'node-uuid';

export default (todos = [], { type, payload }) => {
  switch (type) {
    case 'persist/REHYDRATE':
      return { ...todos, persistedState: payload };
    case ADD_TODO:
      return [
        ...todos,
        {
          id: v4(),
          value: payload.value,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === payload.id) todo.completed = !todo.completed;
        return todo;
      });
    case DELETE_TODO:
      return todos.filter(todo => todo.id !== payload.id);
    default: 
      return todos;
  }
};