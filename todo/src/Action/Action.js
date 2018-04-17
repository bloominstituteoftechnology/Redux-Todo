export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const COMPLETED_TODO = 'COMPLETED_TODO';

let nextTodoItemId = 0;

export const addTodo = text => ({
    type: ADD_TODO,
    id: nextTodoItemId++,
    text
})

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
})

export const completedTodo = filter => ({
    type: COMPLETED_TODO,
    filter
})

function AddTodo(value) {
    return { type: ADD_TODO, value };
}

function ToggleTodo(index) {
    return { type: TOGGLE_TODO, index };
}

function CompletedTodo(filter) {
    return { type: COMPLETED_TODO, filter };
}