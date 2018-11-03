import { GRAB_TODOS, ADD_TODO, REMOVE_TODOS, TOGGLE_TODO } from '../actions';

export default (todos = [], action) => {
    switch (action.type) {
        case GRAB_TODOS:
            return action.payload;
        case ADD_TODO:
            return [...todos, action.payload];
        case REMOVE_TODOS:
            return todos.filter( todo => !todo.completed)
        case TOGGLE_TODO:
            return todos.map( todo => {
                if (todo.id === action.payload) {
                    return Object.assign({}, todo, { completed: !todo.completed })
                }
            })
        default:
            return todos;
    }
}