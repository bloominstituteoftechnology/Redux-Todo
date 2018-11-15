export const ADD_TODO = 'ADD_TODO';

export const addTodoAction = (payload) => {
    return { type: ADD_TODO, payload: payload}
}