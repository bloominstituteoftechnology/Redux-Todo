import {ADD ITEM, TOOGLE ITEM} from './actions/index';

const toDo = (state =[], actions) => {
    switch(action.type) {
        case 'ADD ITEM':
        return state.concate(action.payload);
        case 'TOOGLE ITEM':
        return state.map(item => item !== action.payload);
        default:
        return state;

    };
};
 
/*this whole thing might be wrong*/
