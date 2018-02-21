import { ADDTODO, TOGGLE } from '../actions';

export default todos(state = [], action) => {
    switch (action.type) {
        case ADDTODO:

            return state;
        case TOGGLE:
            
            return state;
        default:
            return state;
    }
};
