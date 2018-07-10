import { ADD_TODO } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
    const newTodo = Array.from(state);
    newTodo.push(action.payload);
    return newTodo;
    
    default:
      return state;
  }
};
