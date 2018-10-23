import { ADD_TODO_ITEM, MARK_COMPLETE } from '../actions';

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
          ...todos,
          {
            item: action.payload,
            id: state.id,
            completed: false,
          },
        ],
        id: state.id + 1,
      };
    case MARK_COMPLETE:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return { ...todo, completed: !todo.completed };
          } else {
            return friend;
          }
        }),
      };
  }
};
