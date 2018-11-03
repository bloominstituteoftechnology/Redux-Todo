import { ADD_TODO, TOGGLE_TODO } from '../actions';

const initialState = {
    todolist: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return ....
        case TOGGLE_TODO:
            return ...
        default:
            return state;
    }
}