import { ADD_TODO } from '../actions';

const initialState = {
    todos: [
        {
            id: 1,
            done: false,
            value: "Learn Redux"
        }

    ]
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return { todos: [...state.todos, action.payload] }
        default:
            return state;
    }
} 

export default reducer;