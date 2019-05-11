import { ADD_TODO, UPDATE_TODO, REMOVE_TODO } from '../actions';

const initialState = {[
  {
    text: 'Clean Basement',
    completed: false,
    id: 0
  }
],
  name: "Ryan"
};

export const todosReducer = (state = initialState, action) => {
  switch() {
    case ADD_TODO:
      return [...state.todos, action.payload];
    default:
      return state;
  }

};
