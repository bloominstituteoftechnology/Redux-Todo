// import { TOGGLE_COMPLETED, SUBMIT_TODO } from '../actions';

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?

const initialState = {  todos:[{    value: 'Walk the dog.',
                                    completed: false
                            }],
                        value: "",
                        completed: false    };

 const reducer= (state = initialState, action) => {
  switch (action.type) {
    case 'INPUT_VALUE':
    return { ...state,
            value: action.payload}

    case 'TOGGLE_COMPLETED':
    // Fill in the body of this case
        // if (!state.todos[action.payload].completed)
            return 
                    // { ...state, 
                    // state.todos[action.payload].completed: !(state.todos[action.payload].completed)};

    case 'SUBMIT_TODO':
    // Fill in the body of this case
    return {    todos: [ ...state.todos,
                        action.payload ],
                value:"", 
                completed: false
            };

    default:
      return state;
  }
};

export default reducer;
