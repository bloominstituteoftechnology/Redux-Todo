import { ADD_TODO } from '../actions';

const initialState = {
  todos: []
};

const todosReducer = (state = initialState, action) => {
  console.log('todos reducer');
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [ ...state.todos, action.payload] }
    default:
      return state;
  }
}

export default todosReducer;