import { ADD_TODO, COMPLETE_TODO } from '../actions/actions';

export default (todoState = [], action) => {
  console.log('The Reducer Ran');
  switch (action.type) {
    case ADD_TODO:
      return [
        ...todoState,
        {
          text: action.text,
          completed: false,
        },
      ]
    case COMPLETE_TODO:
      return Object.assign({}, todoState, {
        todos: todoState.map((todo, index) => {
          if (index === action.index) {
            return Object.assign({}, todo, {
              completed: !todo.completed,
            });
          }
          return todo;
        }),
      });
    default:
      return todoState;
  }
};
