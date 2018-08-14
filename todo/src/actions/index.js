export const ADDTODO = 'ADD_TODO'
export const TOGGLETODO = 'TOGGLE_TODO'

export const addTodo = todo => {
    return {
        type: ADDTODO,
        id: todo.id,
        title: todo.title
    }
}

export const toggleTodo = todo => {
    return {
        type: TOGGLETODO,
        id: todo.id
    }
}
