export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';





export const addTodo = (value) => {
return {
    type: ADD_TODO,
    payload: value,
}
}

export const toggleTodo = (value) => {
    return {
        type: TOGGLE_TODO,
        payload: value,
    }
}