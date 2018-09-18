export function addTodo(state, action) {
    switch(action.type) {
        case "ADD_TODO":
        return [
            ...state,
            {
                value: action.payload,
                completed: false
            }
        ]
        default: 
        return state
    }
}

export default addTodo; 