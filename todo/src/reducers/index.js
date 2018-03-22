import { ADD, DELETE } from '../actions';

export default (state = [] , action) => {
    switch(action.type){
        case ADD:
            return [ ...state, action.todo];

        case DELETE:
            const newState = [...state];
            newState.splice(action.index, 1);
            return newState;
            
        default:
            return state;
    }
};