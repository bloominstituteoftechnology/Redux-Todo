//currentState =reducer(currentState, action) . returns and object ALWAYS 
//that has the same shape as our state

import {ADD_TODO} from '../actions';

export const initialState = { //always an object!!
    todos: []
}; 

export const todo = (state=initialState, action)  => {
    switch (action.type) {
        case ADD_TODO:
            return {...state, todos: [...state.todos, action.payload]};
        default:
            return state
    }
}

