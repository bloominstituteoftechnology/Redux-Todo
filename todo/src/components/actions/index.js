export const ADD_TODO = 'ADD_TODO';

export const addTodo = newTodo => {
    return {
        type: ADD_TODO,
        payload: newTodo,
    };
};