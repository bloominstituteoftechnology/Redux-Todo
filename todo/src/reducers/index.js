import { ADD_TODO } from '../actions';

const initialState = {
  todos: []
};

const todosReducer = (state = initialState, action) => {
  console.log('todos reducer');
  switch (action.type) {
    default:
      return state;
  }
}

export default todosReducer;