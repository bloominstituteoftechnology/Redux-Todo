// specify how the application's state changes 
// in response to actions sent to the store.

import {ADD_TODO, REMOVE_TODO, COMPLETED} from '../actions';

const todoReducer = (todos = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...todos, {id: action.id, value: action.payload, completed: false}];
        case REMOVE_TODO:
            return todos.filter(todo =>
                (todo.id !== action.payload) ? todo : null
            );
        case COMPLETED: //update a specific item in the array without resorting to mutations
            return todos.map(todo =>
                (todo.id === action.payload) ? {...todo, completed: !todo.completed} : todo
            );
        default:
            return todos;
    }
};

export default todoReducer;