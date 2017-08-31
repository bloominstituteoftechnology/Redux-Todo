export const selectTodoList = (todo) => {
    return {
        type: 'TODO_SELECTED',
        payload: todo
    };
};