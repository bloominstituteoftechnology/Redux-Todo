let nextId = 0;

export const addToDo = text => ({
    type: 'ADD_TODO',
    payload: {
        id: nextId++,
    text
}})

export const todoToggle = id => ({
    type: 'TOGGLE_TODO',
    payload: {
        id
}})