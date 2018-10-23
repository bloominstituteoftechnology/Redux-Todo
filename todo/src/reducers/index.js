import {
    CREATE_TODO,
    UPDATE_TODO,
    DELETE_TODO,
    COMPLETE_TOGGLE
} from '../actions';

const initialState = {
    todos: [],
}

export default (state = initialState, action) => {
    switch(action.type) {
        case CREATE_TODO :
        return {...state, };
        
        case UPDATE_TODO :
        return {...state, };
        
        case DELETE_TODO :
        return {...state, };
        
        case COMPLETE_TOGGLE :
        return {...state, };
        
        default: return {...state}
    }
}