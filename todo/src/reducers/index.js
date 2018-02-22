import { ADD_TODO } from '../actions';

const ToDoReducer =  (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      const newToDo = {
        value: action.payload,
        completed: false
      }
      return [...state, newToDo]
    default:
      return state;
  }
}

export default ToDoReducer;