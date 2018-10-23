export const UPDATE_TODOS = 'UPDATE_TODOS';
export const TOGGLE_COMPLETE="TOGGLE_COMPLETE";
export const DELETE_TODO="DELETE_TODO";

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

export const deleteTodo = index => {
    return {
        type: DELETE_TODO,
        payload:index
    }
}