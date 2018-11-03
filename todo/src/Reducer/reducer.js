import { ADD_COMMENT } from '../Actions/actions';

const initialState = {
    todos: [
        {
            value: 'Initial State',
            complete: false
        }
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMMENT:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}