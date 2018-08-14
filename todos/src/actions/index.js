

export const addTodo = (newTodo) => {
    return {
        type: "ADD_TODO", 
        payload: newTodo
    }
}

export const toggleTodo = (id) => {
    return {
        type: "TOGGLE_TODO", 
        payload: id
    }
}