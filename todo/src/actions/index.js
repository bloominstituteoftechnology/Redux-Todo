
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const toggleTodo = index => {
    return {
        type: TOGGLE_TODO,
        payload: index
    }
}
