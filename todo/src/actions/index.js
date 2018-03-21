export const NEW_TODO = 'NEW_TODO';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
export const DEL_TODO = 'DEL_TODO';

export const addTodo = (todo) => {
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

export const delTodo = (index) => {
    return {
        type: DEL_TODO,
        payload: index
    }
};