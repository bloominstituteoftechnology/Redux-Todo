export const ADDTODO = 'ADDTODO';
export const DELETETODO = 'DELETETODO';
export const TOGGLETODO = 'TOGGLETODO';

export const addTodo = (todo) => {
    return {
        type: ADDTODO,
        payload: todo
    }
}

export const deleteTodo = (id) => {
    return {
        type: DELETETODO,
        payload: id
    }
}

export const toggleTodo = (id) => {
    return {
        type: TOGGLETODO,
        payload: id
    }
}
