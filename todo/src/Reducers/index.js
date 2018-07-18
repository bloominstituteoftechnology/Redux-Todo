import { ADD_NEW_TODO } from '../Actions/index';

const todosReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_NEW_TODO:
            return [
                ...state, action.payload
            ]
        // case TOGGLE_COMPLETED:
        //     return 
        default:
            return state;
    }
}

export default todosReducer;

