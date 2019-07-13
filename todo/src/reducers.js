import { ADDTODOS, DELETETODOS } from '../actions';

// The initial state of the todo list is just an empty string.
const initialState = {
    todo: ''
}

// These reducers will either add a todo or delete the list of todos 
export default (state = initialState, action) => {
    switch (action.type) {
        case ADDTODOS: 
        return console.log('um hi');
        case DELETETODOS: 
        return console.log('well hello there');
        default: return state;
    }
};

