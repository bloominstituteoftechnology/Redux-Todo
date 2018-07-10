export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
export const REMOVE_COMPLETED = 'REMOVE_COMPLETED';

export const addTodo = todo => {
    return {
        type: ADD_TODO,
        payload: todo,
    };
};

export const toggleCompleted = id => {
    return {
        type: TOGGLE_COMPLETED,
        payload: id,
    };
};

export const removeCompleted = () => {
    return {
        type: REMOVE_COMPLETED,
    };
};