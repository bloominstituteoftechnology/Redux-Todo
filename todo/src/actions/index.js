export const ADD_NEW_TODO = 'ADD_NEW_TODO';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';

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