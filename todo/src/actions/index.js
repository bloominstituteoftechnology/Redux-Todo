export const ADD = 'ADD';
export const TOGGLE = 'TOGGLE';

export const add = (todo) => {
    return {
        type: ADD,
        payload: todo
    }
};

export const toggle = (index) => {
    return {
        type: TOGGLE,
        payload: index
    }
};
/*teacher code
export const NEW_TODO = 'NEW_TODO';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';

export copnst addTodo = (todo) => {
    return {
        type: NEW_TODO,
        payload: todo
    }
};

export const toggleComplete = (index) => {
    return {
        type: TOGGLE_COMPLETE,
        payload: index
    }
};
*/