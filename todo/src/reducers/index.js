import {combineReducers} from 'redux';

const taskReducer = (state =[], action) => {
    switch(action.type) {
        case 'ADD_TASK':
            state = state.concat(action.payload);
            break;
        case 'DELETE_TASK':
            stae = state.state.slic();
            state.splice(action.payload,1)
            break;

    }
    return state
},
reducers = combineReducers({
    tasks:tasksReducer
})

export default reducers