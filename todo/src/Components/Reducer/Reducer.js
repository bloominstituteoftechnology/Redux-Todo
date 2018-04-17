import {
    ADD_TODO,
    TOGGLE_TODO,
    COMPLETED_TODO,
    CompletedFilters
} from './Action/Action.js';
const { SHOW_ALL } = CompletedFilters;

function CompletedFilters(state = SHOW_ALL, action) {
    switch (action.type) {
        case COMPLETED_TODO:
            return action.filter;
        default:
            return state;
    }
}

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo;
            })
    
        default:
            return state;
    }
}