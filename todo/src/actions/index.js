export const UPDATE_TODOS = 'UPDATE_TODOS';

export const updateTodos = todo => {
    return {
        type: UPDATE_TODOS,
        payload: todo
    }
}