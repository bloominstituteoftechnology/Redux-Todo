import { ADDTODO, COMPLETETODO } from '../actions';

export default (todo = [], action) => {
    switch (action.type) {
        case ADDTODO:
        console.log('add');
        return[ ...todo, {
            id: action.id,
            completed: false 
        }];
        default: return todo;
    }
} 