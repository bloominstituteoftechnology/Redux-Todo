import { ADD_TODO } from '../actions/actions';

const initialState = {
    todos: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        // case ADD_TODO:

        default:
            return state;
    }
}