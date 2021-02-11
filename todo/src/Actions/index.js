const TOGGLETODO = 'TOGGLE_TODO';
const DELETETODO = 'DELETE_TODO';
const ADDTODO = 'ADD_TODO';

let nextTodoId = 0;

export const addTodo = text => ({
    type: ADDTODO,
    id: ++nextTodoId,
    text
})

export const toggleTodo = id => ({
    type: TOGGLETODO,
    id,
})

export const deleteTodo = id => ({
    type: DELETETODO,
    id
})