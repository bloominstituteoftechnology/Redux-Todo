import { ADD_TODO, TOGGLE_COMPLETE, DELETE_TODO } from '../actions/actions';

const reducer = (state = { todos: [] }, action) => {
  const { todos = [], ...rest } = state;

  switch (action.type) {
    case ADD_TODO:
      return {
        ...rest,
        todos: [...todos, { id: action.payload.id, text: action.payload.text, completed: false }],
      };

    case TOGGLE_COMPLETE: {
      const index = todos.findIndex(todo => todo.id === action.payload.id);
      const todo = todos[index];
      return {
        ...rest,
        todos: [...todos.slice(0, index), { ...todo, completed: !todo.completed }],
      };
    }

    case DELETE_TODO: {
      return {
        ...rest,
        todos: todos.filter(todo => todo.id !== action.payload.id),
      };
    }

    default:
      return state;
  }
};

export default reducer;
