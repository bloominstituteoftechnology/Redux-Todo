import { ADD_TODO, TOGGLE_TODO } from '../actionTypes';

const initialState = {
  todos: []
};

const reducer = (state = initialState, action) => {
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
      let newList = state.todos.map(todo => {
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
        todos: newList
      };
    default:
      return state;
  }
};

export default reducer;
