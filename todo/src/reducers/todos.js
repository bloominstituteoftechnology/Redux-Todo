import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions';

let latestTodoId = 0;

export default (todos = [], { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return [
        // break out the individual objects that are currently in the state array
        ...todos,
        // add new todo to the end of the array
        {
          id: ++latestTodoId,
          value: payload.value,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === payload.id) todo.completed = !todo.completed;
        return todo;
      });
    case DELETE_TODO:
      return todos.filter(todo => todo.id !== payload.id);
    default: 
      return todos;
  }
};