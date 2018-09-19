export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';

export const addTodo = newTodo => {
    return {
        type: ADD_TODO,
        payload: newTodo
    };
};

export const completeTodo = todoId => {
    return {
        type: COMPLETE_TODO,
        payload: todoId
    };
};