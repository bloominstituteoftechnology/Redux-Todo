import { ADD_TODO, COMPLETE_TOGGLE } from '../actions'; 

export default (todos = []   , action) => { 
    switch (action.type) {
        case ADD_TODO:
            return todos.concat(action.payload);    
        case COMPLETE_TOGGLE:
            return todos.concat(action.payload);
        default:
            return todos;    
    }
}