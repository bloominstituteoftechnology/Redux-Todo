export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export function addTodo(str) {
    console.log(str)
    return {
        type: ADD_TODO,
        todo: str
    }
}

export function toggleToDo(value) {
    return {
        type: TOGGLE_TODO,
        todo: value
    }
}

export function removeToDo(value) {
    return {
        type: DELETE_TODO,
        todo: value
    }
}