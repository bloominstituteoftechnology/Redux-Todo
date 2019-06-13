import { combineReducers } from 'redux';
import { GET_TODOS } from '../actions/index';

const todos = 
    [
        { todo: 'do the dishes', completed: false },
        { todo: 'do laundry', completed: false },
        { todo: 'work out', completed: true}
    ];

export const todoReducer = (todos = [], action) => {
    let newTodo = [];

    switch(action.type) {
        case GET_TODOS:
            return Object.assign({}, state, {
                todos: [...state.todos, { todo: action.payload, completed: false }
            ]}); 

        case ERASE_TODO:
            new
        console.log(action);
            newTodo = state.filter(todo => {return todo.task !== action.payload})
        default:
            return state;
    }
}

export default todoReducer;