import {ADD} from '../actions';

export const initialState = {
    todos: [],
}

export function todoReducer(state = initialState, action){
    console.log(action);
    switch(action.type){
        case ADD:
            return {...state, todos:action.payload};
        default:
            return state;
    }
}