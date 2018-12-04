const initialState = {
  todos: [{ value: "Walk the dog.", completed: false }]
};


const reducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default reducer;