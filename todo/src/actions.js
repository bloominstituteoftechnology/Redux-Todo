export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

export const addTodoAction = (value, id) => {
    return { type: ADD_TODO, payload: value, index: id }
};
export const toggleTodoAction = (value, id) => {
    return { type: TOGGLE_TODO, payload: value, index: id }
}
