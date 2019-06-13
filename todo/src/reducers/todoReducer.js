import { ADD_TODO, TOGGLE_COMPLETED, REMOVE_COMPLETED } from '../actions';

export default (todos = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...todos, action.payload];
        case TOGGLE_COMPLETED:
            return todos.map(todo => {
                if(todo.id === action.payload) {
                    return Object.assign({}, todo, { completed: !todo.completed });
                }
                return todo;
            });
        case REMOVE_COMPLETED:
            return todos.filter(todo => !todo.completed);
        default:
            return todos;
    }
};