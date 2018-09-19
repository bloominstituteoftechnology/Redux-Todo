import { ADD_TODO,
        TOGGLE_COMPLETED,
        DELETE_COMPLETED,
        DELETE_ITEM } from '../actions';

export default (todos = [{value: 'Walk the dog.', completed: false, id:Date.now()}], action) => {
  switch (action.type) {
    case ADD_TODO:
      return action.text
      ? [ ...todos, {value: action.text, id: action.id, completed:false} ]
      : todos
    case TOGGLE_COMPLETED:
      return todos.map( todo => todo.id === action.id
        ? { ...todo, completed: !todo.completed }
        : todo )
    case DELETE_COMPLETED:
      return todos.filter( todo => !todo.completed )
    case DELETE_ITEM:
      return todos.filter( todo => todo.id !== action.id )
    default:
      return todos;
  }
};
