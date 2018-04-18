import { ADDTODO, TOGGLETODO } from '../actions'

export default (state = [], action) => {
    switch(action.type) {
        case ADDTODO:
        return [...state, action.payload];
    case TOGGLETODO:
        state[action.payload].complete = !state[action.payload].complete;
        return state;
        default:
        return state;
    }
}