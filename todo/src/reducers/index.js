import { ADD_TODO, TOGGLE_COMPLETED } from '../actions';

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
        if (todo.id === action.paylaod) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return { ...todo };
        }
      });
      return { todos: newTodos };
    default:
      return state;

    case DELETE_TODO:
  }
}
