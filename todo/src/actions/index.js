export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

export const addTodo = todo => ({
    type: ADD_TODO,
    payload: todo
});


export const toggleTodo= index => ({
    type: TOGGLE_TODO,
    payload: index
});