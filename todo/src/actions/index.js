export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

// create action creator
export const addTodo = value => {
    return {
        type: ADD_TODO,
        payload: value    
    }
}

export const toggleTodo = bool => {
    return {
        type: TOGGLE_TODO,
        payload: bool
    }
}