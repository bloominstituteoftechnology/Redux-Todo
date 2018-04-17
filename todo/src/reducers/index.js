import { ADDTODO, DELETETODO } from '../actions';

export default (todos = [], action) => {
    switch(action.type) {
        case ADDTODO:
            return [...todos, {
                id: todos.length,
                value: action.payload,
                completed: false
            }];
        case DELETETODO: 
            return todos.filter(todo => {return todo.id !== action.id})
        default:
            return todos;
    }
};