export const ADDTODO = 'ADDTODO';
export const DELETETODO = 'DELETETODO';

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
