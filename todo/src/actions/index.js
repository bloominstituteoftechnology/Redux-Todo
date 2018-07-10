export const addHandler = (newTodo) => {
    return {
        type: 'ADD_TODO',
        payload: {
            value: newTodo,
            completed: false
        }
    }
}