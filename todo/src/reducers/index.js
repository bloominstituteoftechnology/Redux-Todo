import { combineReducers } from 'redux';

let nextId = 0;
const todos = (state = [], action) => {
    switch (action.type) {
        case "ADD": 
            return [...state,
                { 
                    text: action.text,
                    id: nextId++,
                }];
        default:  
            return state;
    }
}

const reducers = combineReducers({
    todos,
});

export default reducers;