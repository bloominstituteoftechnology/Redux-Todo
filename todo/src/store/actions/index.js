export const ADDTODO = 'ADDTODO';

export const addNewTodos = (todo) => {
    return {
        type: ADDTODO,
        payload: todo
    }
}