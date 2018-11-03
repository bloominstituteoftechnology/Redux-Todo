export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODOS = 'REMOVE_TODOS';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const addTodo = todo => {
    return {
        type: ADD_TODO,
        payload: todo
    };
};

export const removeTodos = () => {
    return {
        type: REMOVE_TODOS,
    };
};

export const toggleTodo = id => {
    return {
        type: TOGGLE_TODO,
        payload: id
    };
};