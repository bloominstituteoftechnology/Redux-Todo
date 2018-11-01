

// Set the initial state
const initialState = {
  todos: [{
    value: 'Create Todo List',
    completed: false
  }]
};

// Will need to put actions into a switch here.
export default ( state = initialState, action ) => {
  switch( action.type ) {
    default:
      return state;
  }
};