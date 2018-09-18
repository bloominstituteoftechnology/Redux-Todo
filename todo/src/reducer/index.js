import { ADD_TODO } from '../action';

const initialState = {
  todos: [
    {
      value: 'Walk the dog.',
      completed: false,
      id: 0,
    },
  ],
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [...state.todos, action.payload],
      });
    default:
      return state;
  }
}
