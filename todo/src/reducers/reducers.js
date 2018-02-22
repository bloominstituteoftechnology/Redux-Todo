import { ADD_TODO, COMPLETE_TODO } from '../actions/actions';

export default (todos = [], action) => {
  console.log('The Reducer Ran');
  switch (action.type) {
    case ADD_TODO:
      return [...todos, action.payload];
    case COMPLETE_TODO:
      return Object.assign({}, todos, {
        todos: todos.map((todo, index) => {
          if (index === action.index) {
            return Object.assign({}, todo, {
              completed: !todo.completed,
            });
          }
          return todos;
        }),
      });
    default:
      return todos;
  }
};
