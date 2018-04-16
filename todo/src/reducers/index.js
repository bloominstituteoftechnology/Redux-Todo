export const reducer = (state = { todos: [] }, action) => {
    switch (action.type) {
        case 'ADD':
            return {...state, todos: state.todos.concat(action.payload)};
        case 'REMOVE':
            return {...state, todos: state.todos.filter(todo => todo.value !== action.payload.value)};
        default:
            return state;
    }
};