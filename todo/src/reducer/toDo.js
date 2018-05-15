import {ADD ITEM, TOOGLE ITEM} from 

const toDo = (state =[], actions) => {
    switch(action.type) {
        case 'ADD ITEM':
        return state.concat(action.payload);
        case 'TOOGLE ITEM':
        return state.map(item => item !== action.payload);
        default:
        return state;

    }
};
 
/*this whole thing might be wrong*/