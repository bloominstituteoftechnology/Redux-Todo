const initialState = {
    todos: [],
}


const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NEW_FRIEND':
            return state.todos.push({
                
            });
        case 'TOGGLE_COMPLETED':
            return {
                
            }
        default:
            return state;
    }
}

export default todosReducer;

