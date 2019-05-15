import * as C from '../constants'

export function addTodo(todo) {
    return {
        type: C.ADD_TODO,
        payload: todo
    }
}

export function editTodo(todo) {
    return {
        type: C.EDIT_TODO,
        payload: todo
    }
}

export function deleteTodo(todo) {
    return {
        type: C.DELETE_TODO,
        payload: todo
    }
}