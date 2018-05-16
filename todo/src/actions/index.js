export const ADD_TODO = "ADD_TODO"
export const TOGGLE_TODO = "TOGGLE_TODO"

let nextId = 1;
export const addToDo = text => {
    return {
        type: ADD_TODO,
        payload: {
            id: nextId++,
            text,
            complete: false,
        }
    }
}

export const toggleTodo = id => {
    return {
        type: TOGGLE_TODO,
        payload: id,
    }
}