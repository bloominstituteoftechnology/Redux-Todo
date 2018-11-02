import { DELETE_TODO, ADD_TODO, COMPLETE } from "../actions/action";

const initialState = {
  todos: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const id = Date.now();
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          { todo: action.payload, id: id, complete: false }
        ]
      });
    case COMPLETE:
      const newStateTodos = state.todos.map(item => {
        if (item.id === action.payload) {
          return { todo: item.todo, id: item.id, complete: !item.complete };
        } else return item;
      });
      return Object.assign({}, state, { todos: newStateTodos });
    case DELETE_TODO:
      const deletedStateTodos = state.todos.filter(item => item.id !== action.payload)
      return Object.assign({}, state, { todos: deletedStateTodos });
    default:
      return state;
  }
};
