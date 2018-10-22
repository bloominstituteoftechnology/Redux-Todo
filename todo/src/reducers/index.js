import {ADD_TODO, REMOVE_TODO, COMPLETED} from '../actions';

const todoReducer = (todos = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...todos, {id: action.id, value: action.payload, completed: false}];
        case REMOVE_TODO:
            return todos.filter(todo =>
                (todo.id !== action.payload) ? todo : null
            );
        case COMPLETED:
            return todos.map(todo =>
                (todo.id === action.payload) ? {...todo, completed: !todo.completed} : todo
            );
        default:
            return todos;
    }
};

export default todoReducer;