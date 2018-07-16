const initialState = {
    Todos: [],
}

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NEW_FRIEND':
            return {

            }
        case 'TOGGLE_COMPLETED':
            return {
                
            }
        default:
            return state;
    }
}

