import { ADD_COMMENT, TOGGLE_COMPLETE } from '../Actions/actions';

const initialState = [
    {
        value: 'Initial State',
        complete: false,
        id: 0
    }
]

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMMENT:
            return [...state, action.payload]
        case TOGGLE_COMPLETE:
            return state.map(todo => 
                (todo.Id === action.payload) ? {...todo, complete: !todo.complete} : todo )
        default:
            return state;
    }
}