export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const COMPLETED_TODO = 'COMPLETED_TODO';

export const AddTodo = {
    value: '',
    CompletedTodo: false
}

export const ToggleTodo = {
    index: ''
}

export const CompletedTodo = {
    filter: SHOW_COMPLETED
    
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