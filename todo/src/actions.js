export const ADD_TODO = "ADD_TODO";

export const addTodoAction = (value) => {
    return { type: ADD_TODO, payload: value }
};
