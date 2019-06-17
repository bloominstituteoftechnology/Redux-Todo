import { ADD_TODO } from '../actions';

const initialState = {
    todo: ["Learn Redux"]
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return { ...state, todo: [...state.todo, action.payload]}
        default:
            return state;
    }
} 

export default reducer;