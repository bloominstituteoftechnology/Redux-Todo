import { ADD_TODO } from '../actions';

const initialState = {
  todos: [
    {
      id: 0,
      value: 'Do something',
      completed: false
    }
  ]
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    default:
      return state;
  }
};

export default todoReducer;
