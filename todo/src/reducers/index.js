import { ADD_TODO, TOGGLE } from '../actions';

// Set the initial state
const initialState = {
  todos: [{
    id: 0,
    value: 'Create Todo List',
    completed: false
  },
  {
    id: 1,
    value: 'Do Something Else',
    completed: false
  }
]
};

// Will need to put actions into a switch here.
export default ( state = initialState, action ) => {
  // I think I will need to use a copy of State to push additions onto.
  // Setting this up now, so that I don't forget:
  // let oldState = state.todos;

  switch( action.type ) {
    // case ADD_TODO:
    //   // Payload contains array 
    //   return Object.assign({}, state, {
    //     todos: [...state.todos, action.payload]
    //   });

    case TOGGLE:
      // Map the change needed. payload contains ID
      const newState = state.todos.map( (todo) => {
        if( action.payload === todo.id ){
          todo.completed = !todo.completed;
          return todo;
        }
        else{
          return todo;
        }
      });
      // Set the new state.
      return Object.assign({}, state, { todos: newState });

    default:
      return state;
  }
};