import { ADDTODO } from './actions';

const initialState = {
  todos: [
    {value: 'Brush Teeth',
      completed: false
    },
    {value: 'Go Outside',
      completed: false
    }
  ],
  newTodo: {
    value: 'testing',
    completed: false
  }
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ADDTODO:
      return {...state, todos: {value: action.addedTodo, completed: false}}
    default:
      return state;
  }
};
