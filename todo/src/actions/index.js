export const CREATE_TODO = 'create_todo';
export const COMPLETE_TOGGLE = 'complete_toggle';
export const UPDATE_TODO = 'update_todo';
export const DELETE_TODO = 'delete_todo';

export const createTodo = (value) => {
    return {
        type: CREATE_TODO,
        payload: value
    }
};

export const completeToggle = (index) => {
    return {
        type: COMPLETE_TOGGLE,
        payload: index
    }
};

export const deleteTodo = (index) => {
    return {
        type: DELETE_TODO,
        payload: index
    }
};

export const updateTodo = (index, value) => {
    return {
        type: UPDATE_TODO,
        payload: {index, value}
    }
};
