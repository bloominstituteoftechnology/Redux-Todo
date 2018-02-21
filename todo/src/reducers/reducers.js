import { ADD_TODO, COMPLETE_TODO } from '../actions/actions';

export default (todoState = null, action) => {
  console.log('The Reducer Ran');
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, todoState, {
        todos: [
            ...todoState, {
            text: action.text,
            completed: false
          },
        ],
      });
    case COMPLETE_TODO:
      return Object.assign({}, todoState, {
          todos: todoState.todos.map((todo, index) => {
            if (index === action.index) {
                return Object.assign({}, todo, {
                    completed: !todo.completed
                })
            }
          })
      })
    default:
      return todoState;
  }
};
