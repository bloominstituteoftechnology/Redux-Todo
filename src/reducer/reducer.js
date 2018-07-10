import uuidv1 from 'uuid/v1';
import { ADD_TODO, TOGGLE_COMPLETE } from '../actions/actions';

const reducer = (state = { todos: [] }, action) => {
  const { todos, ...rest } = state;

  switch (action.type) {
    case ADD_TODO:
      return {
        ...rest,
        todos: [...todos, { id: uuidv1(), text: action.payload.text, completed: false }],
      };

    case TOGGLE_COMPLETE: {
      const index = todos.findIndex(todo => todo.id === action.payload.id);
      const todo = todos[index];
      return {
        ...rest,
        todos: [...todos.slice(0, index), { ...todo, completed: !todo.completed }],
      };
    }

    default:
      return state;
  }
};

export default reducer;
