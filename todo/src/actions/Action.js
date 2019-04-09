export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const DELETE_TODO = "DELETE_TODO";

export function addTodo(newTodo) {
    return { type: ADD_TODO, payload: newTodo }
}

export function toggleTodo(index) {
    return { type : TOGGLE_TODO, payload: index }
}

export function deleteTodo(index) {
    console.log("from action deleteTodo:", index)
    return { type: DELETE_TODO, payload: index}
}