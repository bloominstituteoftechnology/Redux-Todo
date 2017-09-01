import { ADD, TOGGLE } from '../actions';
import { combineReducers } from 'redux';

let i = 0;
const todos = (state = [], action) => {
    switch (action.type) {
        case ADD: 
            return [...state,
                { 
                    text: action.text,
                    completed: false,
                    id: i++,
                }];
        case TOGGLE:
            const mapped = state.map((todo) => {
                if (todo.id == action.id) todo.completed = !todo.completed;
                return todo;
            });
            return mapped;
        default:  
            return state;
    }
}


const allReducers = combineReducers({
    todos,
});


export default allReducers;
