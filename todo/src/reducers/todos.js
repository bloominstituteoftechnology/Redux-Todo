const todos = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return[...state, action.payload];
        case 'REMOVE_TODO':
            //something
        case 'TOGGLE_TODO':
            //something
        default:
            return state;  
    }
}

export default todos;