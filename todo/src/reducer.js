const intialState = {};

export default (state = intialState, action) => {
    switch(action.type) {
        case 'ADD_TODO': 
            return 
        case 'UPDATE_TODO':
            return
        case 'DELETE_TODO':
            return
        default: return state;
    }
}