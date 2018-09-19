
// The initial state
const initialState = {
    todos:[
        {
            id: 0,
            value: 'Walk the dog',
            completed: false
        },
    ]
};

// currentState = reducer (state, action) - returns an object
export const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}