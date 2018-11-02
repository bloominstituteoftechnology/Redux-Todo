import {ADD_TODO, REMOVE_TODO} from '../actions/actions.js'

const initialState = []


export const reducer = (state = initialState, action) =>{

    switch (action.type) {
        case ADD_TODO:
            return state.concat([action.payload])
            // return [...state, action.payload]
        case REMOVE_TODO:
            
        default:
            return state;
    }

}