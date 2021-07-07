// import { TOGGLE_COMPLETED, SUBMIT_TODO } from '../actions';

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?

const initialState = {  todos:[{    value: 'Walk the dog.',
                                    completed: false
                            }],
                        value: ""};

const reducer= (state = initialState, action) => {
  switch (action.type) {
    case 'INPUT_VALUE':
        return { ...state,
                value: action.payload}

    case 'TOGGLE_COMPLETED':
    // Fill in the body of this case
        return { ...state,
                todos: state.todos.map( (todo, index) => {
                        // console.log(index);
                        if (index === action.payload) {
                                return Object.assign({}, todo, { completed: !todo.completed });
                        }
                        return todo;
                        })}
//     case 'REMOVE_TODOS':
//         return { ...state,
//                 todos: state.todos.filter(todo => !todo.completed)}

    case 'REMOVE_TODO':
        return { ...state,
                todos: state.todos.filter((todo,index) => 
                        index !== action.payload
                )}

    case 'SUBMIT_TODO':
    // Fill in the body of this case
        return {todos: [ ...state.todos,
                        action.payload ],
                value:""
                };

    default:
      return state;
  }
};

export default reducer;
