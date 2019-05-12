import { ADD, DELETE, LINETHROUGH } from '../Actions/Index.js';

export default (state = [], action) => {
    switch(action.type){
        case ADD:
        return [ ...state, action.todo];
        case LINETHROUGH:
        const newishState = [...state];
        newState.linethrough(action.index);
        return newishState;
        case DELETE:
        const newState = [...state];
        newState.splice(action.index, 1);
        return newState;
        default:
        return state;
    }
};