export const ADD_TODO = 'ADD_TODO';
export const COMPLETED = 'COMPLETED';
export const DELETE_ITEM = 'DELETE_ITEM';

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

export const deleteTodo = id => {
    return {
        type: DELETE_ITEM,
        id: id
    };
};