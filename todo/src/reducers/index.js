import { ADD_TASK, GET_TASKS } from '../actions';

export const listReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TASK:
            return state.concat(action.payload);
        case GET_TASKS:
            return state.concat(action.payload);
        default: 
            return state;
    }
         
}