export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const DELETE_TODOS = "DELETE_TODOS";

export const addTodoAction = (value, id) => {
    return { type: ADD_TODO, payload: value, index: id }
};
export const toggleTodoAction = (value) => {
    return { type: TOGGLE_TODO, payload: value }
}
export const deleteTodosAction = (value) => {
    return { type: DELETE_TODOS, payload: value}
}
