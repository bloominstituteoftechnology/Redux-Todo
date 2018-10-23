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
        console.log(todo.id, action.payload, todo.id === action.payload);
        if (todo.id === action.payload) {
          console.log(todo.id);
          todo.completed = !todo.completed;
        }
        return todo;

        console.log(newTodos, 'newTodos');
      });
      return { todos: newTodos };

    case DELETE_TODO:
      console.log('in delete');
      return {
        ...state,
        todos: state.todos.filter(todo => {
          return todo.id !== action.payload;
        })
      };

    default:
      return state;
  }
}
