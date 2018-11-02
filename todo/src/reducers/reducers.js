
const initialState = {
    todos: [ { value: 'Make a reducer', completed: false }, { value: 'Make actions', completed: false} ]
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_ITEM":
            return { value: action.value, completed: false }
        default:
            return state
    }
}

export default reducer;