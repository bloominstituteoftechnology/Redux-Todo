import { ADD, DELETE } from '../actions';

export default (state = [] , action) => {
    switch(action.type){
        case ADD:
            return [ ...state, action.todo]; // add and return new state
        case DELETE:
            // make a copy of the state
            const newState = [...state];

            //rmeove the indexed item
            newState.splice(action.index, 1);
            return newState;
        default:
            return state;
    }
};