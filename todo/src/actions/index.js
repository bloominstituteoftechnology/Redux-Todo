export const ADD = 'ADD';
export const REMOVE = 'REMOVE';

const add = (newTodo) => {
    return {
        type: ADD,
        payload: newTodo
    }
};
export {add};

export const remove = (removeTodo) => {
    return {
        type: REMOVE,
        payload: removeTodo
    }
};