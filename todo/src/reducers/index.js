import { ADD_TODO } from '../actions/actions';

const initialState = {
    todos: [{
        value: "Walk the dog",
        completed: false
    }]
};

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    action.todo
                ]
            });
        default:
            return state;
    }
};
