import { ADD_TODO, TOGGLE_COMPLETED, DELETE_TODO } from '../actions';

export const initialState = {
  todos: []
};

export function todoReducers(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          { id: action.id, value: action.text, completed: false }
        ]
      };

    case TOGGLE_COMPLETED:
      const newTodos = state.todos.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return { ...todo };
        }
      });
      return { todos: newTodos };

    case DELETE_TODO:
      const updatedTodos = state.todos.filter(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return { ...todo };
        }
      });
      return { todos: updatedTodos };

    default:
      return state;
  }
}
