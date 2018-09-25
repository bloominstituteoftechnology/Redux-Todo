const initialState = [{task: "Learn Redux", completed: fasle, id: Date.now()}];

const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
        return state.concat(action.payload);
        default:
        return state;
    }
    
}

export default todoReducer;