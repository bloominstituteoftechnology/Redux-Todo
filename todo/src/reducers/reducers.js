
const initialState = {
    todos: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_ITEM":
            return { value: action.value }
        default:
            return state
    }
}

export default reducer;