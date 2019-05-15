import * as C from '../constants'

export function addTodo(todo) {
    return {
        type: C.ADD_TODO,
        payload: todo
    }
}

export function doTodo(todo) {
    return {
        type: C.DO_TODO,
        payload: todo
    }
}

export function undoTodo(todo) {
    return {
        type: C.UNDO_TODO,
        payload: todo
    }
}