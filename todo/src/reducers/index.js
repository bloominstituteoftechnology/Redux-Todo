import { ADD_TODO } from '../actions';

const initialState = {
  todos: [
    {
      id: 0,
      completed: false,
      text: 'Walk the dog'
    }
  ]
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [...state.todos, action.payload],
      })
    default:
    return state;
  }
}
