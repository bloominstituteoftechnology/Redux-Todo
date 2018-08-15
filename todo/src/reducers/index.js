
const initialState = {
    todos: [],
    todo: ""
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todos: [...state.todos, action.payload],
                todo: ""
            }
        case "EDIT_INPUT":
            return {
                ...state,
                todo: action.todo
            }
        default:
            return state;
    }
}