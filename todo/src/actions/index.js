export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

let nextTodoId = 1

export const addTodo = todo => {
    return {
        type: ADD_TODO,
        payload: todo,
        id: nextTodoId++
    };
};

export const toggleTodo = id => {
    return {
        type: 'TOGGLE_TODO',
        id
    };
};