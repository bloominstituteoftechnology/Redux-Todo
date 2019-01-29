import { ADD_TODO } from '../actions'

const initialState = {
  todos: [
    { todo: 'workout', completed: false },
    { todo: 'do laundry', completed: true },
    { todo: 'work on car', completed: false },
  ]
}

function reducer(state = initialState, action) {
  console.log("reducer", action);
  switch(action.type) {
    case ADD_TODO:
      const newTodo = {
        todo: action.payload,
        completed: false
      };
      return {
        ...state,
        todos: [...state.todos, newTodo]
      }
    default:
    return state;
  }
  
}

export default reducer;