export const ADDTODO = "ADDTODO";
export const REMOVETODO = "REMOVETODO";
export const TOGGLETODO = "TOGGLETODO";


export function addTodo(todo) {
    return {
        type: ADDTODO,
        payload: todo
    };
}

export const removeTodo = (id) => {
    return {
        type: REMOVETODO,
        payload: id
    };
}

export const toggleTodo = (id) => {
    return {
        type: TOGGLETODO,
        payload: id
    };
}