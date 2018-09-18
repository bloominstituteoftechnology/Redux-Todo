import { ADD_TODO } from '../actions';

export const initialState = {
    todos: [
        {
            id: 0,
            completed: false,
            text: "Walk the dog."
        },

        {
            id: 1,
            completed: false,
            text: "Walk the cat."
        },

        {
            id: 2,
            completed: false,
            text: "Walk the monkey."
        }
    ]
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return Object.assign({}, state, {
                todos: [...state.todos, action.payload]
            });

        default: 
        console.log(state);
        return state;
    }
}