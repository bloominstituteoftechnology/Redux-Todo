import { ADD_TODO, TOGGLE_TODO, GET_TODOS } from '../actions';

const initialState = {
    todos: []
  };

  const reducers = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TODO:
        return {
            ...state,
            todos: [...state.todos, action.payload]
        };
      case TOGGLE_TODO:
        return state.todos.map(todo => {
          if (todo.id === action.payload) {
            return Object.assign({}, todo, { completed: !todo.completed });
          }
          return todo;
        });
      case GET_TODOS:
        return action.payload;
      default:
        return state;
    }
  };

export default reducers;