import {ADD_NEW_TODO} from '../actions';

export const todoReducer = (state = [], action) => {
    switch (action.type){
        case ADD_NEW_TODO:
        console.log('action state: ', state.concat(action.payload))
         return state.concat(action.payload);
        default:
        return state;
    }
}