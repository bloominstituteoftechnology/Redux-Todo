import { TOGGLE_TODO, ADD_TODO, DELETE_TODO, UPDATE_FIELD } from '../actions';

let initialState = { todos: [{id: -1, text: "Default Todo", complete: false}], field: "" };
export default (state = initialState , action) => {
  console.log(state);
  switch (action.type) {

    case ADD_TODO:
    let newTodos = state.todos.concat(action.payload);
    return Object.assign({}, state, { todos: newTodos });

    case TOGGLE_TODO:
    return Object.assign({}, state, { todos: state.todos.map((todo) => {
      if (todo.id === action.payload) {
        return Object.assign({}, todo, {complete: !todo.complete});
      }
      else return todo;
    }) })

    case DELETE_TODO:
    return Object.assign({}, state, { todos: state.todos.filter((todo) => todo.id !== action.payload)
    });

    case UPDATE_FIELD:
    return Object.assign({}, state, { field: action.payload });

    default:
      return state;

  }
};
