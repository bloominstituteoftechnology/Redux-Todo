

const initialState = {todos: [{value: 'walk the dog', completed: false}]}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
        return state;
    }    
}

export default todoReducer;