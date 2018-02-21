import { ADDTODO, TOGGLE } from '../actions';

export default (todos = [], action) => {
    switch (action.type) {
        case ADDTODO:

            return todos;
        case TOGGLE:
            
            return todos;
        default:
            return todos;
    }
};
