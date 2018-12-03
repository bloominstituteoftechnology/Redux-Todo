import {ADD_TODO} from '../actions';

const initialState = {
  todos: [
    {
      task: 'walk the dog',
      complete: false,
      id: 1,
    },
    {
      task: 'do something else',
      complete: false,
      id: 2,
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: state.todos.concat(action.payload),
      };
    default:
      return state;
  }
};
