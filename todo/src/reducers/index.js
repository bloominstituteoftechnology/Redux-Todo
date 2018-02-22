import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions';

const todoReducer = (todos = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      //return todos.concat(action.payload);
      return [...todos, action.payload];
    case TOGGLE_TODO:
      // todos[action.payload].complete = !todos[action.payload].complete;
      return todos.map(todo => (todo.id === action.id) 
        ? {...todo, completed: 
        !todo.completed} : todo);
    case DELETE_TODO:
      const newTodos = todos.slice(0);
      newTodos.splice(action.payload, 1);
      return newTodos;
    default:
      return todos;
  }
};

export default todoReducer;
