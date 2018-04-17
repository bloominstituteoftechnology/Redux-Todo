export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const COMPLETED_TODO = 'COMPLETED_TODO';

let nextTodoItemId = 0;

export const AddTodo = text => ({
    type: ADD_TODO,
    id: nextTodoItemId++,
    text
})

export const ToggleTodo = id => ({
    type: TOGGLE_TODO,
    id
})

export const CompletedTodo = filter => ({
    type: COMPLETED_TODO,
    filter
})

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