import {ADD_TODO} from '../actions';

const initialState = {
  todos: [
    {
      task: 'walk the dog',
      complete: false,
      id: 0,
    },
    {
      task: 'do something else',
      complete: false,
      id: 1,
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      console.log('reducer', action);
      const newId = state.todos.length;
      return {
        ...state,
        todos: state.todos.concat({
          task: action.payload,
          complete: false,
          id: newId,
        }),
      };
    default:
      console.log('default');
      return state;
  }
};
