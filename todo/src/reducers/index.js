import { ADD_TODO, REMOVE_TODO } from '../actions'

export default (todos = [] , action) => {
    switch(action.type) {
        case ADD_TODO:
        return todos.concat(action.payload);
        case REMOVE_TODO:
        return  todos[action.payload].complete; 
         default: return todos;

    }
};
