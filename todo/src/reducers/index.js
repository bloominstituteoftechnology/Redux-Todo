import { NEW_TODO } from '../actions/index'

export const todoReducer=  (todos = [], action) => {
    switch (action.type) {
      case NEW_TODO:
      return todos.concat(action.payload)
     
    
     
      default:
        return todos;
    }
  };
