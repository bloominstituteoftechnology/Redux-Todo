//e combineReducers helper function turns an object whose 
//values are different reducing functions into a single reducing function
import { combineReducers } from 'redux';

const todoReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      state = state.concat(action.payload); //Payload contains the Data
      break;
    case 'DELETE_TODO':
      state = state.slice();
      state.splice(action.payload, 1);
      break;
  }
  return state;
}