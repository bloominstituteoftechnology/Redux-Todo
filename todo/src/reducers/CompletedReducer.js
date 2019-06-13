import {TODO_COMPLETED} from './../actions/index';

const initialState = {completed: false}
export const CompletedReducer = (state = initialState, action) => {
    switch (action.type){
        case TODO_COMPLETED:
            return Object.assign({}, state, {completed: !state.completed})
        default: 
        return state;
    } 
}

