export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const COMPLETED_TODO = 'COMPLETED_TODO';

export const AddTodo = {
    type: ADD_TODO,
    text: ''
}

export const ToggleTodo = {
    type: TOGGLE_TODO,
    index: ''
}

export const CompletedTodo = {
    type: COMPLETED_TODO,
    filter: SHOW_COMPLETED
    
}

export const CompletedFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export function AddTodo(value) {
    return { type: ADD_TODO, value };
}

export function ToggleTodo(index) {
    return { type: TOGGLE_TODO, index };
}

export function CompletedTodo(filter) {
    return { type: COMPLETED_TODO, filter };
}