import { ADDTODO, TOGGLE } from "../actions";

// export default function todos (state = [], action) {
// ^^^ this one gives the reducer a name "todos" but we're
// not sure if it needs to have a name.

export default (state = [], action) => {
  switch (action.type) {
    case ADDTODO:
      return state.concat(action.payload);
    case TOGGLE:
      return state.map(todo => {
        if (todo.id === action.payload) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          });
        }
        return todo;
      });
    default:
      return state;
  }
};
