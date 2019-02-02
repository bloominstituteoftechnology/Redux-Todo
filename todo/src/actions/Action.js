export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

export function addTodo(newTodo) {
    console.log("from action addTodo:", newTodo)
    return { type: ADD_TODO, payload: newTodo }
}

export function toggleTodo(index) {
    console.log("from action toggleTodo:", index)
    return { type : TOGGLE_TODO, payload: index }
}
