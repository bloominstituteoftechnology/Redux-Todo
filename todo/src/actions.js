export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';

export const addTodoAction = (payload) => {
    return {type: ADD_TODO, payload: payload}
}

export const toggleCompletedAction = (payload) => {
    return {type: TOGGLE_COMPLETED, payload: payload}
}