export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

let nextTodoId = 1;

export const addTodo = todo => {
    return {
        type: ADD_TODO,
        payload: todo,
        id: nextTodoId++
    };
};

export const toggleTodo = index => {
    return {
        type: 'TOGGLE_TODO',
        payload: index
    };
};
