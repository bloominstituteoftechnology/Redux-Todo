import { ADD_TODO } from './actions';

const initialState = {
    todo: [],
}

export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_TODO:
            return {
                ...state,
                todo: action.payload
            }
        default:
            return state;
    }
}