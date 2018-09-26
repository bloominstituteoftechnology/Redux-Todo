// currentState= reducer(currentState, action)
import {ADD_TODO, TOGGLE_TODO} from '../Actions/index';

const initialState = {
    list: [
        {   
            id: 0,
            value: 'walk the dog', 
            completed: false
        },
    ]
}

export const todoReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
        return {
            ...state, list: [...state.list, action.payload]
        }
        default:
            return state;
    }
}