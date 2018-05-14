import {ADD, REMOVE} from '../actions'

export const controller = function (state = [], action) {
    switch (action.type) {
        case ADD:
            return state.concat(action.payload);
        case REMOVE:
            return state;
        default:
            return state;
    }
}