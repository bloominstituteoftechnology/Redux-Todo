import { ADD, UPDATE } from '../actions';
import { combineReducers } from 'redux';


const todos = (state = [], action) => {
    switch (action.type) {
        case ADD: 
            return [...state, { text: action.text,
                completed: false,}];
        default:  
            return state;
    }
}

const input = (state = '', action) => {
    switch (action.type) {
        case UPDATE:
            return action.text;
        default:
            return state;
    }
}
const allReducers = combineReducers({
    todos,
    input,
});


export default allReducers;
