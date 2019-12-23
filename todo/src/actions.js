export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
export const DELETE_TODO = 'DELETE_TODO'

export const addTodoAction = (payload) => {
    return {type: ADD_TODO, payload: payload}
}

export const toggleCompletedAction = (payload) => {
    return {type: TOGGLE_COMPLETED, payload: payload}
}

export const deleteTodoAction = (payload) => {
    return {type: DELETE_TODO, payload: payload}
}