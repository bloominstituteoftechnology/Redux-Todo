export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

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