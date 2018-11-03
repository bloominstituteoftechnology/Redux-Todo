export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

let nextId = 0;

export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextId++,
    text
})

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})