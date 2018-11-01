import { ADD_TODO, TOGGLE } from '../actions';

// Set the initial state
const initialState = {
  todos: [{
    value: 'Create Todo List',
    completed: false
  }]
};

// Will need to put actions into a switch here.
export default ( state = initialState, action ) => {
  // I think I will need to use a copy of State to push additions onto.
  // Setting this up now, so that I don't forget:
  // let oldState = state.todos;

  switch( action.type ) {
    case ADD_TODO:
    case TOGGLE:
    default:
      return state;
  }
};