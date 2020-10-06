export const addTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        payload: todo
    }
}

export const toggleTodo = (todoId) => {
    return {
        type: 'TOGGLE_TODO',
        payload: todoId
    }
} 