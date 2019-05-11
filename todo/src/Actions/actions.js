export const ADD_TODO = 'ADD_TODO';
export const SLASH_TODO = 'SLASH_TODO';

{
    todos: []
}

export const addTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        payload: todo
    }
}

export const slashTodo = (todo) => {
    return {
        type: 'SLASH_TODO',
        payload: todo
    }
}