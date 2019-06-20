import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actionTypes';

const initialState = {
  todos: []
};

const emptyTodo = { todo: '', id: -1, complete: false };

const reducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { todo: action.newTodo, id: Date.now(), complete: false }
        ]
      };
    case TOGGLE_TODO:
      let toggledList = state.todos.map(todo => {
        if (todo.id === action.id) {
          return {
            ...todo,
            complete: !todo.complete
          };
        }
        return todo;
      });
      return {
        ...state,
        todos: toggledList
      };
    case DELETE_TODO:
      let deletedList = state.todos.map(todo => {
        if (todo.id === action.id) return emptyTodo;
        return todo;
      });
      return {
        ...state,
        todos: deletedList
      };

    default:
      return state;
  }
};

export default reducer;
