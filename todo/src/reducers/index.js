
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
        case "TOGGLE_TODO":
            let newState = {...state};
            newState.todos[action.id].completed = !newState.todos[action.id].completed;
            console.log(newState);
            return newState;
        default:
            return state;
    }
}