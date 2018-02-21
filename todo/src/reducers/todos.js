import { ADDTODO, TOGGLE_COMPLETE } from '../actions/todoActions';

export default (todos = [], action) => {
    switch (action.type) {
        case ADDTODO:
            return [...todos, action.payload];
        
        case TOGGLE_COMPLETE:
            return todos.map(todo => {
                if (todo.id === action.payload) {
                    return Object.assign({}, todo, { completed: true })
                }
                return todo;
            });

        default:
            return todos;

    }

}