import { TOGGLE_TODO, ADD_TODO, DELETE_TODO } from '../actions';

export default (todos = [{id: -1, text: "Default Todo", complete: false}], action) => {
  switch (action.type) {

    case ADD_TODO:
    return todos.concat(action.payload);

    case TOGGLE_TODO:
    return todos.map((todo) => {
      if (todo.id === action.payload) {
        return Object.assign({}, todo, {complete: !todo.complete});
      }
      else return todo;
    })

    case DELETE_TODO:
    return todos.filter((todo) => todo.id !== action.payload)

    default:
      return todos;

  }
};
