export const NEW_TODO = 'NEW_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const DELETE_COMPLETED = 'DELETE_COMPLETED';
export const CLEAR_ALL = 'CLEAR_ALL';

export const newTodo = (text) => {
    return {
        type: NEW_TODO,
        text,

    }
}

export const completeTodo = (id) => {
    return {
        type: COMPLETE_TODO,
        id
    }
}

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        id
    }
}

export const deleteCompleted = (id) => {
    return {
        type: DELETE_COMPLETED,
        id
    }
}

export const clearAll = () => {
    return {
        type: CLEAR_ALL
    }
}