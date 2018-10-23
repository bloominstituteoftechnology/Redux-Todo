export const UPDATE_TODOS = 'UPDATE_TODOS';
export const TOGGLE_COMPLETE="TOGGLE_COMPLETE";

export const updateTodos = todo => ({
    
        type: UPDATE_TODOS,
        payload: todo
    
})

export const toggleComplete = index => {
    return {
        type: TOGGLE_COMPLETE,
        payload: index
    }
}