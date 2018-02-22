import { ADD_TODO } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      console.log('payload: ', action.payload);
      console.log('state: ', [...state]);
      const newToDo = {
        value: action.payload,
        completed: false
      } 
      console.log('newToDo: ', newToDo)
      return [...state, newToDo]
    default:
      return state;
  }
}