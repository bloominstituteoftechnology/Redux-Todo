import {ADD_NEW_TODO} from '../actions';

const initialState = [ 'check library', 'buy textbook'
]

export const todoReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_NEW_TODO:
        console.log('action state: ', state.concat(action.payload))
         return state.concat(action.payload);
        default:
        return state;
    }
}