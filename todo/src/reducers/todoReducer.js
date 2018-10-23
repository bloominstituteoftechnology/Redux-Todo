

const initialState = {
    todos: [
        {
            value: "Learn Redux",
            completed: false
        }
    ]
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default todoReducer;