export const UPDATE_TITLE = "UPDATE_TITLE";
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

 export function updateTitle(newTitle){
    return {
        type: UPDATE_TITLE,
        payload: newTitle
    };
}

 export function addNewTodo(newTodo) {
    return {
        type: ADD_TODO,
        payload: newTodo
    };
}

 export function toggleTodo(index) {
    return {
        type: TOGGLE_TODO,
        payload: index
    };
} 