export default todo => {
    return { 
        type: 'ADD_TODO',
        payload: todo,            
    }
}

export const toggleCompleted = id => {
    return {
        type: 'TOGGLE_COMPLETED',
        payload: id,
    }
}

export const deleteTodo = id => {
    return {
        type: 'DELETE_TODO',
        payload: id,
    }
}