import { ADD_TODO } from '../actions';

const initialState = {
    todo: 'Todo from Redux store'
};

function reducer(state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case ADD_TODO:
        return {
            ...state,
            todo: action.payload
        };
        default:
            return state;
    }
}

export default reducer;