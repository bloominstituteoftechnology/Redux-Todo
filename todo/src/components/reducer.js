import { ADDTODO, REMOVETODO, GETTODO } from '../action/index';

export default (todos = [], action) => {
    switch(action.type) {
        case ADDTODO:
            return [...todos, ...action.payload]
        case REMOVETODO:
            return todos.filter(todo => todo !== action.payload)
        case GETTODO:
            return action.payload
        default:
            return todos;

        
    }
}