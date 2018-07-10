export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODOS = "REMOVE_TODOS";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";

export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: {
            todo: todo,
            completed: false
        }
    }
}

export const removeTodos = () => {
    return {
        type: REMOVE_TODOS
    }
}

export const toggleCompleted = todo => {
    return {
        type: TOGGLE_COMPLETED,
        payload: todo
    }
}

