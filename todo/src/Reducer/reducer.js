import { ADD_COMMENT, TOGGLE_COMPLETE } from '../Actions/actions';

const initialState = [
    {
        value: 'Initial State',
        complete: false
    }
]

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMMENT:
            return [...state, action.payload]
        // case TOGGLE_COMPLETE:
        //     return state.map(todo => 
        //         (todo.comment === action.comment) ? {...todo, !todo.completed} : todo )
        default:
            return state;
    }
}