import {
    NEW_TODO,
  } from '../actions';
  
  export default (todos = [], action) => {
    console.log(action.type)
    switch (action.type) {
  
      case NEW_TODO:
        return todos.concat(action.payload);
        break;
      
      default:
        return todos;
    }
  };