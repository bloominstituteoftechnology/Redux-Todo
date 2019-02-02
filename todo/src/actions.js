export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO"

export function addTodo(text) {
    let newTodo = {
        todo: text,
        completed: false
    }
    return { type: ADD_TODO, payload: newTodo };
}

export function deleteTodo(text) {
    let newTodo = {
        todo: text,
        completed: false
    }
    return { type: ADD_TODO, payload: newTodo };
}
