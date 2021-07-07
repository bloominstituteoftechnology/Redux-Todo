import { ADD_TASK, GET_TASKS, DELETE_TASK } from '../actions';

const initialState = [];
export const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return state.concat(action.payload);
        case GET_TASKS:
            return state.concat(action.payload);
        case DELETE_TASK:
            return state.filter(task => { return task !== action.payload});
        default: 
            return state;
    }
         
}