import {
  ADD_TODO_ITEM,
  MARK_COMPLETE,
  MARK_IMPORTANT,
  CLEAR_COMPLETED,
} from '../actions';

const initialState = {
  todos: [],
  id: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO_ITEM:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            item: action.payload,
            id: state.id,
            completed: false,
            important: false,
          },
        ],
        id: state.id + 1,
      };
    case MARK_COMPLETE:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            if (todo.important == true) {
              return {
                ...todo,
                important: !todo.important,
                completed: !todo.completed,
              };
            } else {
              return { ...todo, completed: !todo.completed };
            }
          } else {
            return todo;
          }
        }),
      };
    case MARK_IMPORTANT:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload && todo.completed == false) {
            return { ...todo, important: !todo.important };
          } else {
            return todo;
          }
        }),
      };
    case CLEAR_COMPLETED:
      return {
        ...state,
        todos: state.todos.filter((todo) => {
          return todo.completed === false;
        }),
      };
    default:
      return state;
  }
};
