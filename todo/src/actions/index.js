export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';

export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: text
});

export const toggleCompleted = (id) => ({
    type: TOGGLE_COMPLETED,
    id
})