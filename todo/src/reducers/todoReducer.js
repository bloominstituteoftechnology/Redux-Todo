export default (state = [], action) => {
    switch(action.type){
        case ADDITEM:
        return state.concat(action.payload);

        case DELETEITEM:
        return state.filter(item =>{ item !== action.payload})

        default:
        return state;
    }
}