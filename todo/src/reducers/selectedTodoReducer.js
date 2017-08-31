export default (selectedTodo = null, action) => {
    switch (action.type) {
        case 'TODO_SELECTED':
        return action.payload;
        default:
        return selectedTodo;
    }
};