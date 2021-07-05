import {
  ADD_TODO,
  COMPLETED,
  DELETE_COMPLETED,
  CLEAR_ALL
} from "../actions/action";

const initialState = {
  todos: []
};
let idCounter = 0;

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      idCounter += 1;
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            todo: action.payload.task,
            id: idCounter,
            completed: false
          }
        ]
      });
    case COMPLETED:
      const newState = state.todos.map(item => {
        if (item.id === action.payload) {
          return { todo: item.todo, id: item.id, completed: !item.completed };
        } else {
          return item;
        }
      });
      return Object.assign({}, state, { todos: newState });
    case CLEAR_ALL:
      return Object.assign({}, state, { todos: [] });
    case DELETE_COMPLETED:
      const newIncompleteState = state.todos.filter(item => {
        return item.id !== action.payload;
      });
      return Object.assign({}, state, { todos: newIncompleteState });
    default:
      return state;
  }
};
