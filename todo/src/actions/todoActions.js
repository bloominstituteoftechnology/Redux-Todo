export const ADDTODO = "ADDTODO";
export const REMOVETODO = "REMOVETODO";
export const TOGGLETODO = "TOGGLETODO";


export const addTodo = (todo) => {
    return{
        type: addTodo,
        payload: todo
    };
}

export const removeTodo = (id) => {
    return{
        type: removeTodo,
        payload: id
    };
}

export const toggleTodo = (id) => {
    return{
        type: toggleTodo,
        payload: id
    };
}