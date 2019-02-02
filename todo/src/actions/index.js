export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const MARK_FINISHED = 'MARK_FINISHED';
export const DELETE_FINISHED = 'DELETE_FINISHED';

export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        payload: { id: Date.now(), value: text, completed: false},
    }
}

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        id,
    };
}

export const markFinished = (id) => {
    return {
        type: MARK_FINISHED,
        id,
    };
}

export const deleteFinished = () => {
    return {
        type: DELETE_FINISHED,
    };
}