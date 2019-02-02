export const ADD_TODO = "ADD_TODO";

export function addTodo(text) {
    let newTodo = {
        todo: text
    }
}

return { type: ADD_TODO, payload: newTodo };