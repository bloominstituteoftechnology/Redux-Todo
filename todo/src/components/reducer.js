import { ADDTODO, TOGGLETODO } from '../action/index';

export default (todos = [], action) => {
    switch(action.type) {
        case ADDTODO:
            return [...todos, action.payload]
        case TOGGLETODO:
            return todos.map((todo) => {
                if (action.payload === todo.id){
                    todo.complete = !todo.complete;
                return todo;
            }
                else {
                    return todo;
                }
            })
    default:
        return todos;
    }
}