
import { ADD_TODO, TOGGLE_TODO } from '../actions'

const reducer = (todos = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...todos, action];
        case TOGGLE_TODO:
            return todos.map(todo => {
                if(todo.id === action.payload) {
                    return Object.assign({}, todo, {completed: !todo.completed})
                }
                return todo;
            });
        default:
            return todos;
    }
}

export default reducer;