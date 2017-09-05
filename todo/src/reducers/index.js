import { ADD, TOGGLE, REMOVE} from '../actions';
import { combineReducers } from 'redux';

let i = Math.random() * Math.random() * 1000;
export default (todos = [], action) => {
    switch (action.type) {
        case ADD: 
            return [...todos,
                { 
                    text: action.text,
                    completed: false,
                    id: i * Math.random() * 15,
                }];
        case TOGGLE:
            const mapped = todos.map((todo) => {
                if (Number(todo.id) === Number(action.id)) todo.completed = !todo.completed;
                return todo;
            });
            return mapped;
        case REMOVE:
            const filtered = todos.filter(todo => Number(todo.id) !== Number(action.id));
            return filtered;
        default:  
            return todos;
    }
}
