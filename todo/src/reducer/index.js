import { ADD_TODO } from '../action';
import { TOGGLE_COMPLETE } from '../action';

const initialState = {
  todos: [
    {
      value: 'Walk the dog.',
      completed: false,
      id: 0,
    },
  ],
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case TOGGLE_COMPLETE:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo === action.payload) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      };

    default:
      return state;
  }
}
