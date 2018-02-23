import {
    NEW_TODO,
    TOGGLE_COMPLETE
} from '../actions';

export default (todos = [], action) => {
    switch (action.type) {
        case NEW_TODO:
            //return todos.concat(action.payload);
            return [...todos, action.payload ];
        case TOGGLE_COMPLETE:
            todos[action.payload].complete = !todos[action.payload].complete;
            return todos;
            /*return todos.map((todo, index) => {
                if (index === action.payload) {
                    return Object.assign({}, todo, {
                        complete: !todo.complete
                    });
                } */
            
        default:
            return todos;
    }
};
