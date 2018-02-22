export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';

export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        text,
    }
};

export const todoCompleted = (index) => {
    return {
        type: COMPLETE_TODO,
        index: index,
    }
};
