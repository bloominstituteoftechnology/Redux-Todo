import { ADDTODO, REMOVETODO, TOGGLETODO } from '../actions/todoActions';


export default (state = [], action) => {
    
    switch (action.type) {
        case ADDTODO:   
            state = [...state, action.payload];
            return state;
        case REMOVETODO:
        return [...state.slice(0, action.payload), ...state.slice(action.payload+1)];
        default:
            return state
    }
}
