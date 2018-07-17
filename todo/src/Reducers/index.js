const todosReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_NEW_FRIEND':
            return [
                ...state, action.payload
            ]
        case 'TOGGLE_COMPLETED':
            return 
        default:
            return state;
    }
}

export default todosReducer;

