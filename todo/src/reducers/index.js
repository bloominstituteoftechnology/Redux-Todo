import { ADDTODO, COMPLETETODO } from '../actions';

export default (state = [], action) => {
    switch (action.type) {
        case ADDTODO:
        console.log('add');
        return[ ...state, {
            id: action.id,
            completed: false 
        }];
        default: return state;
    }
} 