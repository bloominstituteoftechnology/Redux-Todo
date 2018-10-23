import { COMPLETE_TODO } from '../actions';

const initalState = {
  todos: [
    {
      value: 'Walk the dog.',
      completed: true
    },
    {
      value: 'Finish project',
      completed: false
    },
    {
      value: 'Learn Redux',
      completed: false
    }
  ]
}

export default (state = initalState, action) => {
  console.log(state);
  switch (action.type) {
    case COMPLETE_TODO:
      return { todos: state.todos.filter( todo => (
        todo.value !== action.value
      ))};
    default:
      return state;
  }
};