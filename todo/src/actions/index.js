export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const COMPLETE = "COMPLETE";
export const UNCOMPLETE = "UNCOMPLETE";

let todoId = 0;
export function addTodo(text) {
    return {
        type: ADD_TODO,
        id: todoId++,
        text: text,
    }
}

export function deleteTodo(id) {
    return {
        type: DELETE_TODO,
        id
    }
}

export function complete(id) {
    return {
        type: COMPLETE,
        id
    }
}

export function uncomplete(id) {
    return {
        type: UNCOMPLETE,
        id
    }
}