export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";

export function addTodo(text) {
    let newTodo = {
        name: text,
        completed: false,
        id: Date.now()
    }
    return { type: ADD_TODO, payload: newTodo };
}

export function toggleComplete(index) {
    return { type: TOGGLE_COMPLETE, payload: index }
}
