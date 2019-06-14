export default (state, action) => {
    switch(action.type){
        case "TODO_ADDED":
        case "TODO_COMPLETED":
        default:
            return state;
    }
}