import { ADD, TOGGLE, REMOVE} from '../actions';
import { combineReducers } from 'redux';

let i = Math.random() * Math.random() * 1000;
const todos = (state = [], action) => {
    switch (action.type) {
        case ADD: 
            return [...state,
                { 
                    text: action.text,
                    completed: false,
                    id: i * Math.random() * 15,
                }];
        case TOGGLE:
            const mapped = state.map((todo) => {
                if (Number(todo.id) === Number(action.id)) todo.completed = !todo.completed;
                return todo;
            });
            return mapped;
        case REMOVE:
            const filtered = state.filter(todo => Number(todo.id) !== Number(action.id));
            return filtered;
        default:  
            return state;
    }
}


const allReducers = combineReducers({
    todos,
});


export default allReducers;
