export const ADD_NEW_TODO = 'ADD_NEW_TODO';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
export const DELETE_TODO = 'DELETE_TODO';
export const DELETE_COMPLETE = 'DELETE_COMPLETE';
export const DELETE_ALL = 'DELETE_ALL';

export const addTodo = (todo) => {
    return {
        type: ADD_NEW_TODO,
        payload: todo
    }
}
export const toggleComplete = (id) => {
    return {
        type: TOGGLE_COMPLETE,
        payload: id
    }
}
export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: id
    }
}
export const deleteCompleted = () => {
    return {
        type: DELETE_COMPLETE
    }
}
export const deleteAll = () => {
    return {
        type: DELETE_ALL
    }
}