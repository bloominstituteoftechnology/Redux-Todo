import {ADD_TODO, TOGGLE_TODO,} from '../actions'

export default (todos = [], action) =>{
    switch(action.type) {
        case ADD_TODO:
            return [...todos, action.payload];
            
        case TOGGLE_TODO:
        return todos.map(todo => {
            if(todos.id === action.payload){
                return {...todo,completed:!todo.completed};
            }
            return todo;
        })
        default:
            return todos;
    }
};