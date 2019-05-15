import * as C from '../constants'

// Todos
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

// Filters
export function showAll() {
    return { type: C.SHOW_ALL }
}

export function showComplete() {
    return { type: C.SHOW_COMPLETE }
}

export function showIncomplete() {
    return { type: C.SHOW_INCOMPLETE }
}