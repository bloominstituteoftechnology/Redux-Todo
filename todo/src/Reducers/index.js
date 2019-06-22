import { ADD_NEW_TODO, TOGGLE_COMPLETED } from '../Actions/index';

const todosReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_NEW_TODO:
            return [
                ...state, action.payload
            ]
        case TOGGLE_COMPLETED:
            return Object.assign({}, state, { completed: !state.completed });
        default:
            return state;
    }
}

export default todosReducer;

