import {TODO_COMPLETED} from './../actions/index';


export const CompletedReducer = (state = [{completed: false}], action) => {
    switch (action.type){
        case TODO_COMPLETED:
            return Object.assign({}, state, {completed: !state.completed})
        default: 
        return state;
    } 
}

