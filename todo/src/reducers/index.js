import { ADD_TASK, GET_TASKS, DELETE_TASKS } from '../actions';

export const listReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TASK: 
            return state.concat(action.payload);
        case GET_TASKS:
            return state.concat(action.payload);
        case DELETE_TASKS:
            return state.filter(task => {return task !== action.payload});
        default:
            return state;
    }
}