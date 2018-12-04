export const ADD_TODO = 'ADD_TODO';
export const COMPLETED = 'COMPLETED';

export const addTodo = text => {
    return {
        type: ADD_TODO,
        text: text
    };
};

export const completed = id => {
    return {
        type: COMPLETED,
        id: id
    };
};

