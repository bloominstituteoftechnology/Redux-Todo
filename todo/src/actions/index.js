export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const GET_TODO = 'REMOVE_TODO';

// ACtion Creators

export const addTodo = todo => ({
    type: ADD_TODO,
    payload: todo,
})

export const toggleTodo = id => ({
    type: ADD_TODO,
    payload: id,
})
