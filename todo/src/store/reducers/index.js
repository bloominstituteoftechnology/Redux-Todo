const initialState = {
    todos: [
        {
            value: 'clean room',
            completed: false,
        },
    ]
};

export const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}