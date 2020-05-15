export const UPDATE_TITLE = "UPDATE_TITLE";
export const ADD_TASK = "ADD_TASK";
export const TOGGLE_DONE = "TOGGLE_DONE";

export function updateTitle(newTitle) {
    return {
        type: UPDATE_TITLE,
        payload: newTitle
    };
}
export function addTask(todoName) {
    return {
        type: ADD_TASK,
        payload: {name: todoName, done: false}
    };
}
export function toggleDone(index) {
    return {
        type: TOGGLE_DONE,
        payload: index
    };
}