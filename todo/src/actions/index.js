export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const addTodo = todo => {
    return { type: ADD_TODO, payload: todo };
};

export const updateTodo = todoId => {
    return {type: UPDATE_TODO, payload: todoId };
};