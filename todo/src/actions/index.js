export const addHandler = (newTodo) => {
    return {
        type: 'ADD_TODO',
        payload: {
            value: newTodo,
            completed: false
        }
    }
}

export const completeTodo = (index) => {
    return {
        type: 'TODO_COMPLETED',
        payload: index
    }
}

export const deleteTodo = (index) => {
    return {
        type: 'DELETE_TODO',
        payload: index
    }
}