import { ADD_TODO, COMPLETE } from '../actions'; 

export default (todos = [], action) => { 
  switch (action.type) {
    case ADD_TODO:
      return todos.concat(action.payload); 
    case COMPLETE:
      
      return todos; 
    default:
      return todos;    
  }
}; 