export const ADD_TODO = 'ADD_TODO';
export const CHANGE_TODO = 'CHANGE_TODO';

export const addTodo = text => ({
    type: 'ADD_TODO',
    text
})

export const changeTodo = text => ({
    type: 'CHANGE_TODO',
    text
})